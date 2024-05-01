import React from "react";
import classes from "./category.module.css";

function catagoryCard({ data }) {
  console.log(data.img);
  return (
    <div className={classes.category}>
      <a href="">
        <span>
          <h1>{data.title}</h1>
        </span>
        <img src={data.img} alt="" />
        <p>Shop Now</p>
      </a>
    </div>
  );
}

export default catagoryCard;
