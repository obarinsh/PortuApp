import "./css/App.css";
import Categories from "./Components/Categories";
import Home from "./Components/Home";
import Translator from "./Components/Translator";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Levels from "./Components/Levels";
import Game from "./Components/Game";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Router>
        <NavBar />
        <main style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/translator" element={<Translator />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories/:categoryName" element={<Levels />} />
            <Route path="/categories/:categoryName/:level" element={<Game />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
