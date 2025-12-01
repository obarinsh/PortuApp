import { useEffect, useState } from "react";
import vocabulary from "../vocabulary.json";
import "../css/buttons.css";
import "../css/App.css";
import { useNavigate } from "react-router-dom";

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [availableCategories, setAvailableCategories] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const categoriesMap = vocabulary.reduce((acc, wordData) => {
      const category = wordData.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(wordData);
      return acc;
    }, {});
    setAvailableCategories(categoriesMap);
  }, []);
  return (
    <>
      <div style={{ padding: "20px", flex: 1 }}>
        <h1>Portuguese Flashcards by Category</h1>
        {!selectedCategory && (
          <div>
            <h2>Select a Category to Begin</h2>
            <div className="categories-container">
              {Object.entries(availableCategories).map(
                ([categoryName, words]) => (
                  <div
                    className="categories-container-wrapper"
                    onClick={() => {
                      navigate(`/categories/${categoryName}`);
                    }}
                  >
                    <div
                      key={categoryName}
                      className={`category-card category-card-${categoryName}`}
                    >
                      {" "}
                    </div>
                    <h1 className="category-button-text">{categoryName}</h1>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Categories;
