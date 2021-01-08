import React from 'react'
import {Container, Typography, Button, Grid } from '@material-ui/core'
import market from '../../assets/market.png'
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
      <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography className="banner__title" variants="h1">
            Welcome to the Market
          </Typography>
          <Button className="banner__button" href="#products">Shopping</Button>

        </Grid>
        <Grid className="banner__brand" item sm={6}>
          <img src={market} alt="Market Logo"/>
        </Grid>
      </Grid>
      </Container>
    </div>
  )
}

export default Banner
