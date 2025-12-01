import { useNavigate, useParams } from "react-router-dom";

function Levels() {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  //   const cardsFilter = cards.filter((card) => card.category === categoryName);
  //   const beginnerCards = chooseLevel(cards, "Beginner");
  //   const intermediateCards = chooseLevel(cards, "Intermediate");
  //   const advancedCards = chooseLevel(cards, "Advanced");
  // if (selectedCategory && !selectedLevel) {
  const handleBackToCategories = () => {
    navigate(`/categories/`);
  };

  //   return (
  //     <div>
  //       <h1>Please choose a level</h1>
  //       <button
  //         onClick={() => {
  //           navigate(`/categories/${selectedCategory}/${selectedLevel}`);
  //           chooseLevel(selectedLevel);
  //         }}
  //       ></button>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1>Please choose a level</h1>
      <div className="button-container">
        <button className="regular-button" onClick={handleBackToCategories}>
          ← Back to Categories
        </button>
      </div>
      <div className="levels-container">
        <div className="levels-buttons-container">
          <h1>Beginner</h1>
          <p>
            Learn the most useful everyday words. Simple vocabulary you need to
            start speaking: family, basic verbs, colors, food, greetings. Be
            ready for your first conversation!
          </p>
          <button
            className="regular-button"
            onClick={() => navigate(`/categories/${categoryName}/Beginner`)}
          >
            Vamos!
          </button>
        </div>
        <div className="levels-buttons-container">
          <h1>Intermediate</h1>
          <p>
            Expand your language skills with more detailed, practical words. You
            learn how to talk about feelings, opinions, daily situations, short
            sentences, and common expressions.{" "}
          </p>
          <button
            className="regular-button"
            onClick={() => {
              navigate(`/categories/${categoryName}/Intermediate`);
            }}
          >
            Vamos!
          </button>
        </div>
        <div className="levels-buttons-container">
          <h1>Advanced</h1>
          <p>
            Learn to express yourself in more complex ways. You learn how to
            talk about your opinions, daily situations, short sentences, and
            common expressions.
          </p>
          <button
            className="regular-button"
            onClick={() => navigate(`/categories/${categoryName}/Advanced`)}
          >
            Vamos!
          </button>
        </div>
      </div>
    </div>
  );
}
export default Levels;
