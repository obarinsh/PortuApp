import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import vocabulary from "../vocabulary.json";
import Card from "./Card";

function Game() {
  const { categoryName } = useParams();
  const { level } = useParams();
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const showCards = vocabulary.filter(
      (card) => card.category === categoryName && card.level === level
    );
    setCards(showCards);
  }, [categoryName, level]);

  // async function loadCategoryWords(categoryName) {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const categoryWords = availableCategories[categoryName];
  //     const transformedCards = categoryWords.map((wordData) => ({
  //       id: wordData.id,
  //       word: wordData.wordPt,
  //       prononciation: wordData.prononciation, // Portuguese word (front of card)
  //       translation: wordData.translationEn, // English translation (back of card)
  //       category: wordData.category,
  //       example: wordData.examplePt, // Portuguese example
  //       exampleTranslation: wordData.exampleEn, // English example
  //       tags: wordData.tags, // Grammar info
  //       level: wordData.level, // Difficulty
  //       hebrew: wordData.translationHe, // Hebrew translation
  //     }));

  //     setCards(transformedCards);
  //     setSelectedCategory(categoryName);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setError(error.message);
  //     setIsLoading(false);
  //   }
  // }
  // const handleCategorySelect = (categoryName) => {
  //   loadCategoryWords(categoryName);
  // };
  // const handleBackToCategories = () => {
  //   setCards([]);
  //   setSelectedCategory(null);
  //   setError(null);
  // };

  // const showCards = (cards, level) => {
  //   return cards.filter((card) => card.level === level);
  // };
  return (
    <div>
      <h1>Game</h1>
      {cards.length > 0 && categoryName && level && (
        <div>
          <div
            className="back-button-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
              width: "100%",
            }}
          >
            <h2 style={{ textAlign: "left", margin: 0 }}>
              ({cards.length} cards)
            </h2>
            {/* <button
              className="back-button"
              onClick={handleBackToCategories}
              style={{ alignSelf: "flex-start", textAlign: "left" }}
            >
              ← Back to Categories
            </button> */}
          </div>

          <p>Click any card to flip between Portuguese and English!</p>
          <p style={{ color: "#666", fontSize: "14px" }}>
            💡 Your vocabulary includes examples, grammar info, and Hebrew
            translations!
          </p>

          <div className="cards-grid" style={{ marginTop: "20px" }}>
            {cards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
