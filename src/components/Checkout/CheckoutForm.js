import React from 'react'
import { Grid, Button, Select, MenuItem, TextField, InputLabel, FormControl } from '@material-ui/core';
import { Link } from 'react-router-dom';

const CheckoutForm = ({
  user = {},
  handleChange,
  handleSubmit,
  handleSelectChange
}) => (

    <form onSubmit={handleSubmit} autoComplete="off">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fillWidth
            id="first-name"
            name="firstName"
            label="First Name"
            value={user.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            requried
            fullWidth
            id="last-name"
            name="lastName"
            label="Last Name"
            value={user.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="email"
            type="email"
            label="Email"
            value={user.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="address"
            name="address"
            value={user.address}
            label="Address"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="city"
            name="city"
            label="city"
            value={user.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="postal-code"
            name="postCode"
            value={user.postCode}
            onChange={handleChange}
            label="ZIP/Postal Code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="shipping-country-select-label">
              Shipping Country
            </InputLabel>
            <Select
              required
              name="shippingCountry"
              id="shipping-country-select"
              // value={user.shippingCountry.code || ""}
              value=""
              labelId="shipping-country-select-label"
              onChange={(e) => handleSelectChange(e, "shippingCountries")}
            >
              {user.shippingCountries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="shipping-subdivision-select-label">
            Shipping Subdivisions
              </InputLabel>
          <Select
            required
            name="shippingSubdivision"
            id="shipping-subdivison-select"
            labelId="shipping-subdivision-select-label"
            value=""
            //value={user.shippingSubdivisons.code || ""}
            onChange={e => handleSelectChange(e, "shippingSubdivisions")}
          >
            {user.shippingSubdivisions.map((subdivision) => (
              <MenuItem key={subdivision.code} value={subdivision.code}>
                {subdivision.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
            <InputLabel id="shipping-options-select-label">
              Shipping Options
            </InputLabel>
            <Select
              required
              name="shippingOptions"
              value=""
              // value={user.shippingOption.id}
              id="shipping-options-select"
              labelId="shipping-options-select-label"
              onChange={e => handleSelectChange(e, "shippingOptions")}
             >
             {console.log('User------------------->', user)}
              {/* {user.shippingOptions.map((option) =>(
                <MenuItem key={option.id} value={option.id}>
                  {`${option.description} - (${option.price.formatted_with_symbol})`}
                </MenuItem>
              ))} */}
            </Select>
        </FormControl>
      </Grid>
      <div className="actions">
        <Button size="medium" to="/basket" component={Link} variant="contained">
          Go Back
      </Button>
        <Button type="submit" size="medium" color="secondary" variant="contained">
          Next
      </Button>
      </div>
    </form>
  )

export default CheckoutForm
