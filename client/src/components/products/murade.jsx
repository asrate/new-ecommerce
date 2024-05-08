import axios from 'axios';
import { useState, useEffect } from 'react';
import classes from "./product.module.css";
import MuradeProductCard from './MuradeProductCard';

const API_URL = 'https://muradezema.com/wp-json/wc/v3';
const API_KEY = 'ck_d82f60add65b5f24cfed9cafc212a8f6e5e95a60';
const API_SECRET = 'cs_8765b8f6ca70dbc6008a6aff338453cdee891d8c';

const Murade = () => {
  const [products, setProducts]= useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/products`, {
          auth: {
            username: API_KEY,
            password: API_SECRET
          }
        });
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
   
      <div>
         <section className={classes.products_container}>
        {products.map((product) => (
          <MuradeProductCard key={product.id} singleProduct={product} />
        ))}
        </section>
      </div>
    
  );
};

export default Murade;
