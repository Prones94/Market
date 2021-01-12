import React, { useState } from 'react'
import { Paper, Container, Typography } from '@material-ui/core'
import CheckoutForm from './CheckoutForm';

import './Checkout.css'


const Checkout = () => {
  const [user, setUser] = useState({
    city:"",
    email:"",
    address: "",
    postCode: "",
    lastName: "",
    firstName: "",
    shippingOptions: {},
    shipppingOptions: [],
    shipppingCountry: {},
    shippingCountries: [],
    shippingSubdivision: {},
    shippingSubdivisions: [],
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({...user, [name]: value});
  }

  const handleSelectChange = (e, state) => {
    const { name, value } = e.target;
    if (state === "shippingOptions") {
      setUser({
        ...user,
        shippingOptions: {
          id:value,
        },
      });
    } else {
      setUser({
        ...user,
        [name]: {
          name: user[state].find((country) => country.code === value).name,
          code: value,
        }
      })
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div className="checkout">
      <Container>
        <Paper className="checkout__paper" elevation={3}>
          <Typography align="center" variant="h5" gutterBottom>
            Checkout
          </Typography>
        </Paper>
      </Container>
      <CheckoutForm
        user={user}
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
        />
    </div>
  )
}

export default Checkout
