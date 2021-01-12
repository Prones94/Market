import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import './Basket.css'

const Banner = () => {
  return (
    <div className="basket__banner">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography className="basket__banner_title" variant="h1">
              Basket is empty, press Shopping to continue adding new products
            </Typography>
            <Button className="basket__button_shopping" component={Link} to="/">
              Shopping
            </Button>
          </Grid>
          <Grid className="basket__brand" item xs={12} sm={6}>
            <ShoppingCart />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Banner
