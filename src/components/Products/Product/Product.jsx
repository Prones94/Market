import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles'

const Product = ({product}) => {
  const classes = useStyles();
  const {price, name, description, image } = product
  return (
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={image} title={product.name}/>
        <CardContent>
          <div className={classes.CardContent}>
            <Typography variant="h5" gutterBottom>
              {name}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {price}
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary">{description}</Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default Product
