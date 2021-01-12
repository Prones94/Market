import React, { useState, useEffect } from 'react'
import { commerce } from '../../lib/commerce'
import { Paper, Container, Typography } from '@material-ui/core'
import CheckoutForm from './CheckoutForm';

import './Checkout.css'

const convertObjectToArray = countries =>
Object.entries(countries || {}).map(([code, name]) => ({code, name}))

const Checkout = ({basket}) => {
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

  const [checkoutData, setCheckoutData] = useState({})

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
    // setBookingStep("order-details");
  }

  useEffect(() => {
    if(basket.id) {
      const generateToken = async () => {
        try {
          const response = await commerce.checkout.generateToken(
            basket.id,
            {
              type: "cart"
            }
          );
          setCheckoutData(response);
        } catch(err) {
          console.error("Checkout error: ", err);
        }
      };
      generateToken();
    }
  }, [basket])

  useEffect(() => {
    const fetchShippingCountries = async () => {
      const { countries } = await commerce.services.localeListShippingcountries(
        checkoutData.id
      );
      const formattedCountries = convertObjectToArray(countries);
      setUser({
        ...user,
        shippingCounries: formattedCountries,
        shippingCountry: formattedCountries[formattedCountries.length -1],
      });
    };
    if (!user.shippingCountries.length && checkoutData.id){
      fetchShippingCountries();
    }
  }, [user, checkoutData]);

  useEffect(() => {
    const fetchSubdvisions = async (countryCode) => {
      const { subdivisions } = await commerce.services.localeListSubdivisons(countryCode);

      const shippingSubdivisions = convertObjectToArray(subdivisions);
      setUser({
        ...user,
        shippingSubdivisions,
        shippingSubdivion: shippingSubdivions[0],
      });
    };

    if (
      (user.shippingCountry.code && !user.shippingSubdivisions.length) ||
      (previousShipping &&
        previousShippingCountry.code !== user.shippingCountry.code)
    )
    fetchSubdivisions(user.shippingCountry.code);
  }, [user, previousShippingCountry])

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
        handleSubmit={handleSubmit}
        />
    </div>
  )
}

export default Checkout
