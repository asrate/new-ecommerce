import React from "react";
import { CatagoryInfo } from "./CatagoryInf";
import CatagoryCard from "./catagoryCard";
import classes from "./category.module.css";

function category() {
  return (
    <section className={classes.category_container}>
      {CatagoryInfo.map((info) => (
        <CatagoryCard data={info} />
      ))}
    </section>
  );
}

export default category;
