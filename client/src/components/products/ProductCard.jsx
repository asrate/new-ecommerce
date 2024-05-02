import React from "react";
import classes from "./product.module.css";
import Rating from "@mui/material/Rating";
function ProductCard({ singleProduct }) {
  const { title, image, price, rating, id } = singleProduct;
  const truncatedTitle = title.length > 20 ? title.substring(0, 20) + "..." : title;
  console.log(singleProduct);
  return (
    <div className={classes.productCard_container}>
      <a href="">
        <img src={image} />
      </a>
      <div>
        <h3>{truncatedTitle}</h3>
      </div>
      <div className={classes.rating}>
        <Rating value={rating.rate} precision={0.1} />
        <small>{rating.count}</small>
      </div>
      <div>
        <p>Price {price} Br</p>
      </div>
      <div>
        <button className={classes.button}>SEE IT</button>
      </div>
      {/* Ashewa */}
      
    </div>
    
    
  );
}

export default ProductCard;
