import React from 'react';
import { useQuery, gql } from '@apollo/client';
import AshewaProductCard from './AshewaProductCard';
import classes from "./product.module.css"

const GET_NEW_ARRIVALS = gql`
  query newArrival($page: Int!, $perPage: Int!) {
    newArrivalsPaginated(page: $page, perPage: $perPage) {
      page
      pages
      totalObjects
      objects {
        name
        stockAmount
        freeDelivery
        originalPrice
        usdPrice
        color {
          id
          name
          image
          size {
            id
            name
            price
            quantity
            __typename
          }
          __typename
        }
        id
        image
        productpriceoptionSet {
          id
          quantity
          discount
          __typename
        }
        productrateSet {
          id
          user {
            username
            id
            __typename
          }
          rate
          comment
          __typename
        }
        specialPrice {
          id
          startDate
          endDate
          price
          __typename
        }
        supplierDomain
        vendor {
          isVerified
          domain
          storeName
          location
          isSupplier
          id
          phone
          user {
            id
            username
            __typename
          }
          __typename
        }
        minimumOrderAmount
        sellingPrice
        nameSlug
        thumbnail
        productimageSet {
          image
          __typename
        }
        discount
        category {
          id
          name
          image
          slugName
          __typename
        }
        parentCategory {
          id
          name
          image
          slugName
          __typename
        }
        subcategory {
          id
          name
          image
          slugName
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;

function ProductList() {
  const { loading, error, data } = useQuery(GET_NEW_ARRIVALS, {
    variables: { page: 1, perPage: 8 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
        {/* <h1>hello</h1> */}
        <section className={classes.products_container}>
      {data.newArrivalsPaginated.objects.map((product) => (
          <AshewaProductCard ashewaProduct={product} key={product.id} />
       
      ))}
       </section>
    </div>
  );
}

export default ProductList;
