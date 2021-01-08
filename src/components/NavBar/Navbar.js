import React from 'react'
import {Container, AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import {Link} from 'react-router-dom'
import market from '../../assets/market.png'

import './Navbar.css'

const Navbar = ({basketItems, totalCost}) => {
  return (
    <>
    <AppBar position="fixed" className="navbar__custom">
      <Container>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className="navbar__title"
            color="inherit"
          >
          <img
            src={market}
            alt="MArket Logo"
            height="25px"
            className="navbar__logo"
          />
          </Typography>
          <div className="navbar__basket_wrapper">
            <IconButton
              component={Link}
              to="/basket"
              aria-label="Show Basket"
              color="inherit"
            >
            <Badge badgeContent={basketItems} color="secondary">
              <ShoppingCart className="navbar__basket"/>
            </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  )
}

export default Navbar
