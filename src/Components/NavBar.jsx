import "../css/nav-bar.css";
import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function NavBar() {
  // const [activeTab, setActiveTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const itemRefs = useRef([]);
  const listRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [selectorStyle, setSelectorStyle] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const navItems = [
    { id: "home", label: "Home", icon: "...", path: "/" },
    { id: "categories", label: "Categories", icon: "...", path: "/categories" },
    { id: "translator", label: "Translator", icon: "...", path: "/translator" },
    { id: "about", label: "About", icon: "...", path: "/about" },
  ];
  const isActive = (itemPath) => {
    return location.pathname === itemPath;
  };
  const handleNavigate = (item) => {
    navigate(item.path);
  };

  const updateSelector = () => {
    const activeIndex = navItems.findIndex(
      (item) => item.path === location.pathname
    );
    const currentItem = itemRefs.current[activeIndex]; // ← Use activeIndex instead of activeTab
    const listEl = listRef.current;

    if (!listEl || !currentItem) return;

    const listRect = listEl.getBoundingClientRect();

    const itemRect = currentItem.getBoundingClientRect();

    const top = itemRect.top - listRect.top;
    const left = itemRect.left - listRect.left;
    const width = itemRect.width;
    const height = itemRect.height;

    setSelectorStyle({ top, left, width, height });
  };
  useEffect(() => {
    updateSelector();
  }, [location.pathname]);

  return (
    <div className="nav-bar-container" ref={navRef}>
      <ul className="nav-bar-items" ref={listRef}>
        <div
          className="hori-selector"
          style={{
            top: selectorStyle.top,
            left: selectorStyle.left,
            width: selectorStyle.width,
            height: selectorStyle.height,
          }}
        >
          <div className="left"></div>
          <div className="right"></div>
        </div>
        {navItems.map((item, index) => (
          <li
            key={item.id}
            className={isActive(item.path) ? "nav-item active" : "nav-item"}
            // onClick={() => handleClick(index)}
            onClick={() => handleNavigate(item)}
            ref={(el) => (itemRefs.current[index] = el)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
