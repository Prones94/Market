import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart} from '@material-ui/icons'
import Market_Logo from '../../assets/Market_Logo.png'
import useStyles from './styles';


const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={Market_Logo} alt="Commerce.js" height="25px" className={classes.image}/>
            Market
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show Items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
