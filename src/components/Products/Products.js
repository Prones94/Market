import React from 'react'
import Product from '../Product/Product';

const Products = ({ products }) => {
  console.log("products --> ", products);
  return (
    <div>
      {products.map((product) => {
        return (
          <Product product={product}/>
        )
      })}
    </div>
  )
}

export default Products
