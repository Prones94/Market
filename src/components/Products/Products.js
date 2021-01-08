import React from 'react'
import Product from '../Product/Product';
import { Grid, Container } from '@material-ui/core'
import Banner from '../Banner/Banner';

const Products = ({ products }) => {
  console.log("products --> ", products);
  return (
    <div>
    <Banner />
      <Container id="products">
        <Grid container spacing={4}>
          {products.map((product, i) => {
            return (
              <Grid key={product.id} item xs={12} sm={6} md={4}>
                <Product product={product} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}

export default Products
