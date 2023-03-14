import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";

const SubmitRating = ({ toggleModalHandler, updateratingsHandler }) => {
  const [isRatings, setIsRatings] = useState(false);
  const [ratings, setRatings] = useState(0);
  const [starHighlight, setStarHighlight] = useState(false);

  const toggleModalHandlerFN = (e) => {
    setIsRatings(false);
    updateratingsHandler(+ratings);
    setRatings(0);
    toggleModalHandler(true);
  };

  const setRatingHandler = (e) => {
    if (e.target.nodeName === "svg") {
      setRatings(e.target.className.baseVal.split(" ")[3].split("-")[1]);
      setStarHighlight(true);
    }
  };

  const setRatingValueHanlder = (e) => {
    if (e.target.nodeName === "path") {
      setIsRatings(true);
    }
  };

  const cancelModalHandler = (e) => {
    setIsRatings(false);
    setRatings(0);
  };
  return (
    <div className="submit__ratingsContainer">
      <section>
        {!isRatings && (
          <div
            className="star__Icons"
            onClick={setRatingValueHanlder}
            onMouseEnter={setRatingHandler}
            onMouseLeave={(e) => setStarHighlight(false)}
          >
            <StarIcon
              className="starIcon__MUI mui-1"
              key="1"
              sx={{
                color: ratings > 0 && starHighlight && "#FFD700",
                fontSize: 50,
              }}
            />
            <StarIcon
              className="starIcon__MUI mui-2"
              key="2"
              sx={{
                color: ratings > 1 && starHighlight && "#FFD700",
                fontSize: 50,
              }}
            />
            <StarIcon
              className="starIcon__MUI mui-3"
              key="3"
              sx={{
                color: ratings > 2 && starHighlight && "#FFD700",
                fontSize: 50,
              }}
            />
            <StarIcon
              className="starIcon__MUI mui-4"
              key="4"
              sx={{
                color: ratings > 3 && starHighlight && "#FFD700",
                fontSize: 50,
              }}
            />
            <StarIcon
              className="starIcon__MUI mui-5"
              key="5"
              sx={{
                color: ratings > 4 && starHighlight && "#FFD700",
                fontSize: 50,
              }}
            />
          </div>
        )}
        {isRatings && (
          <div className="submit__ratingsSection">
            <div className="confirm__submitBtn">You rated {ratings} star</div>
            <div className="button__container">
              <button
                className="submitRatings__button"
                onClick={toggleModalHandlerFN}
              >
                Submit
              </button>
              <button
                className="submitRatings__button calcel-btn"
                onClick={cancelModalHandler}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default SubmitRating;
