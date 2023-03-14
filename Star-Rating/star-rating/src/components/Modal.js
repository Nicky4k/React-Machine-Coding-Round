import React from "react";
import StarIcon from "@mui/icons-material/Star";

const Modal = ({ toggleModalHandler, lastRating }) => {
  const toggleModalHandlerFN = (e) => {
    if (e.target.nodeName === "DIV") {
      toggleModalHandler(false);
    }
  };

  return (
    <div className="Modal" onClick={toggleModalHandlerFN}>
      <section>
        <h3>Thank you for rating the product {lastRating} star</h3>
        <article>
          {Array(+lastRating)
            .fill("*")
            .map((star, i) => (
              <StarIcon key={i} sx={{ color: "#FFD700", fontSize: 35 }} />
            ))}
        </article>
      </section>
    </div>
  );
};

export default Modal;
