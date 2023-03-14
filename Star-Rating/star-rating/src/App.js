import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Product from "./components/Product";
import SubmitRating from "./components/SubmitRating";
import starRating from "./data/initial-Data";
import useCustomHooks from "./hooks/useCustomHooks";

function App() {
  const [ratings, setRatings] = useState(starRating);

  const { toggleModalHandle, updateratings } = useCustomHooks();

  const toggleModalHandler = (show) => {
    const updatedratings = toggleModalHandle(ratings, show);
    setRatings(updatedratings);
  };

  const updateratingsHandler = (rating) => {
    const updatedtree = updateratings(ratings, rating);
    setRatings(updatedtree);
  };

  return (
    <div className="App">
      <Product ratings={ratings} />
      {ratings.showModal && (
        <Modal
          toggleModalHandler={toggleModalHandler}
          lastRating={ratings.ratingsArray.at(-1)}
        />
      )}
      <SubmitRating
        toggleModalHandler={toggleModalHandler}
        updateratingsHandler={updateratingsHandler}
      />
    </div>
  );
}

export default App;
