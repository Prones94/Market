import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, CardActionArea, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import './Product.css'

const Product = ({ product, addProduct = () => { } }) => {
  return (
    <Card className="product">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="{product.name}"
          height="260"
          className="product__image"
          image={product.media.source}
          title={product.name}
        />
        <CardContent className="card__content">
          <Typography className="card__title" gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card__action_content">
        <>
          <Typography className="card__price" gutterBottom variant="h5" component="h2">
            {product.price.formatted_with_symbol}
          </Typography>
          <Button
            size="large"
            className="card__button"
            onClick={() => {
              addProduct(product.id, 1);
            }}
          >
            <ShoppingCart /> Add to Basket
        </Button>
        </>
      </CardActions>
    </Card>

  )
}

export default Product
