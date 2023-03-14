import React from "react";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarIcon from "@mui/icons-material/Star";

const Product = ({ ratings }) => {
  const averageRating =
    ratings.ratingsArray.reduce((acc, curr) => acc + curr) /
    ratings.ratingsCount;
  const halfRating = averageRating.toString().split(".")[1].slice(0, 1);

  return (
    <figure className="product_card">
      <img
        className="productCard__photo"
        src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71qpCS36y5L._SY879_.jpg"
        alt="Samsung Galaxy Tab S7"
      ></img>
      <section className="section__info">
        <div className="product__info">
          <h1>Samsung Galaxy Tab S7</h1>
          <div className="productInfo__ratings">
            <article className="productInfo__ratings-Display">
              <span>{averageRating.toFixed(1)}</span>
              {Array(Math.floor(averageRating))
                .fill("*")
                .map((star, i) => (
                  <StarIcon key={i} sx={{ color: "#FFD700", fontSize: 25 }} />
                ))}
              {halfRating >= 5 && (
                <StarHalfIcon sx={{ color: "#FFD700", fontSize: 25 }} />
              )}
            </article>
            <h4 className="productInfo__ratings-count">
              <span>|</span> {ratings.ratingsCount} ratings
            </h4>
          </div>
        </div>
        <div className="corePriceDisplay">
          <span>-1%</span>
          <span>
            <h2>₹ 15,899</h2>
          </span>
        </div>
        <div className="strikeThrogh__priceDisplay">
          <span>M.R.P.: </span>
          <span>
            <h4>
              <s>₹ 15,999</s>
            </h4>
          </span>
        </div>
      </section>
    </figure>
  );
};

export default Product;
