import { useState } from "react";
import "../css/card.css";

function Card({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="card-frame" onClick={flipCard}>
      <div className="card-inner">
        {isFlipped ? (
          <div className="card-back" id={card.id}>
            {card.translation}

            <br />
            <br />
            {card.example && card.exampleTranslation ? (
              <div>
                <small style={{ fontStyle: "italic", color: "#666" }}>
                  PT:{card.example}
                  <br />
                  EN:{card.exampleTranslation}
                  <br />
                </small>
                <br />
              </div>
            ) : (
              <small style={{ color: "#999" }}>No example available</small>
            )}
            <br />
            {card.level && (
              <span style={{ fontSize: "12px", color: "#999" }}>
                Level: {card.level}
              </span>
            )}
          </div>
        ) : (
          <div className="card-front" id={card.id}>
            {card.word}
            <br />
            {card.prononciation}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
