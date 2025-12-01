import { useState } from "react";
import "../css/card.css";

function Card({ card, flipCard }) {
  const { isFlipped } = card;
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
                <small
                  style={{
                    fontStyle: "italic",
                    color: "#666",
                    fontSize: "16px",
                  }}
                >
                  {card.example}
                  <br />
                  <br />

                  {card.exampleTranslation}
                  <br />
                </small>
                <br />
              </div>
            ) : (
              <small style={{ color: "#999" }}>No example available</small>
            )}
            <br />
          </div>
        ) : (
          <div className="card-front" id={card.id}>
            {card.word}
            <br />
            <br />

            {card.prononciation}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
