import React, { useState } from 'react'
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Container, CardActionArea, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Banner from './Banner';
import Spinner from '../Spinner/Spinner';

import './Basket.css'

const Basket = ({ basket, updateProduct, handleEmptyBasket, removeItemFromBasket }) => {
  const [showSpinner, setShowSpinner] = useState(true);

  const loading = () => {
    setTimeout(() => {
      setShowSpinner(false)
    }, 1500);
    if(showSpinner) {
      return <Spinner />
    }
    return <Banner />;
  };
  if (!basket.line_items || !basket.line_items.length) return loading();
  return (
    <Container id="basket">
      <Grid container justify="center" spacing={4}>
        {basket.line_items.map((product) => {
          return (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <Card className="basket__card_custom">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={product.name}
                    height="260"
                    className="basket__card_image"
                    image={product.media.source}
                    title={product.name}
                  />
                  <CardContent className="basket__card_content">
                    <Typography
                      className="basket__card_title"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                    {product.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography
                    className="basket__item_price"
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {product.price.formatted_with_symbol}
                  </Typography>
                </CardActions>
                <CardActions className="basket__actions_content">
                  <Button
                    size="small"
                    color="secondary"
                    variant="outlined"
                    onClick={() => {
                      removeItemFromBasket(product.id);
                    }}
                  >Remove</Button>
                  <>
                    <Button
                      size="small"
                      variant="outlined"
                      className="basket__item_increase"
                      onClick={() => {
                        updateProduct(product.id, product.quantity + 1)
                      }}
                    >+</Button>
                    <Typography>&nbsp;{product.quantity}&nbsp;</Typography>
                    <Button
                    size="small"
                    color="secondary"
                    variant="outlined"
                    onClick={() => {
                      updateProduct(product.id, product.quantity - 1);
                    }}
                    >-</Button>
                  </>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
      <div className="basket__actions">
        <Button
          size="small"
          color="secondary"
          variant="contained"
          onClick={handleEmptyBasket}
        >
        Empty Basket
        </Button>
        <Button
          size="small"
          variant="contained"
          component={Link}
          to="/checkout"
        >
          Checkout
        </Button>
      </div>
    </Container>
  )
}

export default Basket
