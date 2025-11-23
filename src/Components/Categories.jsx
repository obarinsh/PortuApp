import { useEffect, useState } from "react";
import Card from "./Card";
import vocabulary from "../vocabulary.json";
import "../css/buttons.css";
import { useNavigate } from "react-router-dom";

function Categories() {
  // const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const [availableCategories, setAvailableCategories] = useState({});
  const navigate = useNavigate();

  return (
    <>
      <div style={{ padding: "20px", flex: 1 }}>
        <h1>Portuguese Flashcards by Category</h1>
        {!selectedCategory && (
          <div>
            <h2>Choose a Category:</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "15px",
                marginTop: "20px",
              }}
            >
              {Object.entries(availableCategories).map(
                ([categoryName, words]) => (
                  <button
                    key={categoryName}
                    onClick={() => {
                      // handleCategorySelect(categoryName);
                      navigate(`/categories/${categoryName}`);
                    }}
                    disabled={isLoading}
                    style={{
                      padding: "15px",
                      backgroundColor: "#f0f8ff",
                      border: "2px solid #007bff",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      textAlign: "center",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#007bff")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#f0f8ff")
                    }
                  >
                    <strong>{categoryName}</strong>
                    <br />
                    <small>{words.length} words</small>
                    <br />
                  </button>
                )
              )}
            </div>
          </div>
        )}
        {isLoading && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <div> Loading {selectedCategory} flashcards...</div>
          </div>
        )}
        {error && (
          <div style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
            Error: {error}
            <br />
            <button
              onClick={handleBackToCategories}
              style={{ marginTop: "10px", padding: "5px 15px" }}
            >
              Try Another Category
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Categories;
