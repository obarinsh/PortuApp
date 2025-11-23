import { useNavigate, useParams } from "react-router-dom";

function Levels() {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  //   const cardsFilter = cards.filter((card) => card.category === categoryName);
  //   const beginnerCards = chooseLevel(cards, "Beginner");
  //   const intermediateCards = chooseLevel(cards, "Intermediate");
  //   const advancedCards = chooseLevel(cards, "Advanced");
  // if (selectedCategory && !selectedLevel) {

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
      <button onClick={() => navigate(`/categories/${categoryName}/Beginner`)}>
        Beginner
      </button>
      <button
        onClick={() => {
          navigate(`/categories/${categoryName}/Intermediate`);
        }}
      >
        Intermediate
      </button>
      <button onClick={() => navigate(`/categories/${categoryName}/Advanced`)}>
        Advanced
      </button>
    </div>
  );
}
export default Levels;
