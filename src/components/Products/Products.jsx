import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product';
import useStyles from './styles'


const products = [
  {
    id: 1,
    name: 'Shoes',
    price: '105',
    description: 'Running Shoes',
    image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f5b9c285-6aa4-41b1-bbd9-76881246e7b7/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg'
  },
  {
    id:2,
    name: 'Shirts',
    price: '15.99',
    description: 'Under Armour',
    image: 'https://dks.scene7.com/is/image/GolfGalaxy/20UARMRCKBRHMBLLSAPT_Level_Purple_Black?qlt=70&wid=1100&fmt=webp',
  },
  {
    id: 3,
    name: 'Macbook',
    price: '18.50',
    description: '16 inch laptop',
    image: 'https://images.macrumors.com/t/HZNl2dCSaZgxvYqhUJfr-qXcD-U=/2000x/https://images.macrumors.com/article-new/2020/11/macbook-pro-m1-chip.jpg'
  },
  {
    id: 4,
    name: 'Jeans',
    price: '64.99',
    description: 'American Eagle',
    image: 'https://s7d2.scene7.com/is/image/aeo/0119_5579_508_f?$cat-main_large$'
  }
]


const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
    <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products