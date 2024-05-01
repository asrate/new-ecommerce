import React, { useEffect, useState } from "react";
import classes from "./product.module.css";
import ProductCard from "./ProductCard";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <section className={classes.products_container}>
        {products.map((product) => (
          <ProductCard singleProduct={product} key={product.id} />
        ))}
      </section>
    </div>
  );
}

export default Product;
