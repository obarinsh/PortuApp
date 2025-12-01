import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import vocabulary from "../vocabulary.json";
import Card from "./Card";

function Game() {
  const { categoryName } = useParams();
  const { level } = useParams();
  const [cards, setCards] = useState([]);

  const navigate = useNavigate();

  const flipCard = (clickedCard) => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.id === clickedCard.id) {
          return { ...card, isFlipped: !card.isFlipped };
        } else {
          return card;
        }
      })
    );
  };

  useEffect(() => {
    const filteredCards = vocabulary.filter(
      (card) => card.category === categoryName && card.level === level
    );
    const transformedCards = filteredCards.map((wordData) => ({
      id: wordData.id,
      word: wordData.wordPt,
      prononciation: wordData.prononciation, // Portuguese word (front of card)
      translation: wordData.translationEn, // English translation (back of card)
      category: wordData.category,
      example: wordData.examplePt, // Portuguese example
      exampleTranslation: wordData.exampleEn, // English example
      tags: wordData.tags, // Grammar info
      level: wordData.level, // Difficulty
      hebrew: wordData.translationHe, // Hebrew translation\
      isFlipped: false,
    }));
    setCards(transformedCards);
  }, [categoryName, level]);

  const handleBackToLevels = () => {
    navigate(`/categories/${categoryName}`);
  };

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  const turnAllCardsDown = () => {
    setCards((prevCards) =>
      prevCards.map((card) => ({ ...card, isFlipped: false }))
    );
  };
  return (
    <div>
      {cards.length > 0 && categoryName && level && (
        <div>
          <h1>Tap a card to view it in Portuguese or English.</h1>
          <div className="button-container">
            {/* <h2 style={{ textAlign: "left", margin: 0 }}>
              ({cards.length} cards)
            </h2> */}

            <button className="regular-button" onClick={handleBackToLevels}>
              ← Back to Levels
            </button>

            <button className="regular-button" onClick={() => shuffleCards()}>
              Shuffle Cards
            </button>
            <button
              className="regular-button"
              onClick={() => turnAllCardsDown(cards)}
            >
              Turn All Cards Down
            </button>
          </div>
          <div className="cards-grid" style={{ marginTop: "20px" }}>
            {cards.map((card) => (
              <Card key={card.id} card={card} flipCard={() => flipCard(card)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
