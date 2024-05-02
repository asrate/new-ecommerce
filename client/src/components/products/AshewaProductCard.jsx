import React from "react";
import classes from "./product.module.css";
import Rating from "@mui/material/Rating";
function AshewaProductCard({ashewaProduct }) {
//   const { title, image, price, rating, id } = singleProduct;
 // <div key={product.id}>
        //   <h2>{product.name}</h2>
        //   <p>Stock Amount: {product.stockAmount}</p>
        //   <img src={product.image} alt="" />
        //   {/* Add other product details as needed */}
        // </div>
  console.log(ashewaProduct);
  const truncatedTitle = ashewaProduct.name.length > 20 ? ashewaProduct.name.substring(0, 20) + "..." : ashewaProduct.name;
  return (
    
    <div className={classes.productCard_container}>
    <a href={`https://ashewa.com/product/default/${ashewaProduct.nameSlug}/?from=list`} target="_blank" rel="noopener noreferrer">

        <img src={ashewaProduct.image} />
    
      <div>
        <h3>{truncatedTitle}</h3>
      </div>
      <div className={classes.rating}>
        <Rating value={ashewaProduct.productrateSet.rate} precision={0.1} />
        {/* <small>{rating.count}</small> */}
      </div>
      <div>
        <p>Price {ashewaProduct.originalPrice} Br</p>
      </div>
      <div>
        <button className={classes.button}>SEE IT</button>
      </div>
      {/* Ashewa */}
      </a>
    </div>
    
    
  );
}

export default AshewaProductCard;
