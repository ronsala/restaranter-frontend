import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export const SignupForm = (props) => {
  const classes = props.classes;

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    password: '',
    password_confirm: '',
    showPassword: false,
  });

  console.log('state:', state);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    })
  }

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Paper className={classes.paper}>
        <Typography className={classes.header} variant="h2">
          SIGN UP
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField 
            className={classes.field} 
            id="firstname" 
            label="First Name" 
            name="firstName" 
            onChange={handleChange} 
            required="true" 
            style = {{width: '42.5%'}}
            value={state.firstName}
            variant="filled" 
          />
          <TextField 
            className={classes.field} 
            id="lastname" 
            label="Last Name" 
            name="lastName"
            onChange={handleChange} 
            required="true" 
            style = {{width: '42.5%'}} 
            value={state.lastName} 
            variant="filled" 
          />
          <TextField 
            className={classes.field} 
            id="email" 
            label="Email" 
            name="email"
            onChange={handleChange} 
            required="true" 
            style = {{width: '90%'}} 
            value={state.email} 
            variant="filled" 
          />
          <TextField 
            className={classes.field} 
            id="street" 
            label="Street" 
            name="street"
            onChange={handleChange} 
            required="true" 
            style = {{width: '90%'}} 
            value={state.street}
            variant="filled" 
          />
          <TextField 
            className={classes.field} 
            id="city" 
            label="City" 
            name="city"
            onChange={handleChange} 
            required="true" 
            style = {{width: '60%'}} 
            value={state.city}
            variant="filled" 
          />
          <TextField 
            className={classes.field} 
            id="state" 
            label="State" 
            name="state"
            onChange={handleChange} 
            required="true" 
            select="true" 
            style = {{width: '25%'}} 
            value={state.state}
            variant="filled" 
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value="AL">Alabama</MenuItem>
            <MenuItem value="AK">Alaska</MenuItem>
            <MenuItem value="AZ">Arizona</MenuItem>
            <MenuItem value="AR">Arkansas</MenuItem>
            <MenuItem value="CA">California</MenuItem>
            <MenuItem value="CO">Colorado</MenuItem>
            <MenuItem value="CT">Connecticut</MenuItem>
            <MenuItem value="DE">Delaware</MenuItem>
            <MenuItem value="FL">Florida</MenuItem>
            <MenuItem value="GA">Georgia</MenuItem>
            <MenuItem value="HI">Hawaii</MenuItem>
            <MenuItem value="ID">Idaho</MenuItem>
            <MenuItem value="IL">Illinois</MenuItem>
            <MenuItem value="IN">Indiana</MenuItem>
            <MenuItem value="IA">Iowa</MenuItem>
            <MenuItem value="KS">Kansas</MenuItem>
            <MenuItem value="KY">Kentucky</MenuItem>
            <MenuItem value="LA">Louisiana</MenuItem>
            <MenuItem value="ME">Maine</MenuItem>
            <MenuItem value="MD">Maryland</MenuItem>
            <MenuItem value="MA">Massachusetts</MenuItem>
            <MenuItem value="MI">Michigan</MenuItem>
            <MenuItem value="MN">Minnesota</MenuItem>
            <MenuItem value="MS">Mississippi</MenuItem>
            <MenuItem value="MO">Missouri</MenuItem>
            <MenuItem value="MT">Montana</MenuItem>
            <MenuItem value="NE">Nebraska</MenuItem>
            <MenuItem value="NV">Nevada</MenuItem>
            <MenuItem value="NH">New Hampshire</MenuItem>
            <MenuItem value="NJ">New Jersey</MenuItem>
            <MenuItem value="NM">New Mexico</MenuItem>
            <MenuItem value="NY">New York</MenuItem>
            <MenuItem value="NC">North Carolina</MenuItem>
            <MenuItem value="ND">North Dakota</MenuItem>
            <MenuItem value="OH">Ohio</MenuItem>
            <MenuItem value="OK">Oklahoma</MenuItem>
            <MenuItem value="OR">Oregon</MenuItem>
            <MenuItem value="PA">Pennsylvania</MenuItem>
            <MenuItem value="RI">Rhode Island</MenuItem>
            <MenuItem value="SC">South Carolina</MenuItem>
            <MenuItem value="SD">South Dakota</MenuItem>
            <MenuItem value="TN">Tennessee</MenuItem>
            <MenuItem value="TX">Texas</MenuItem>
            <MenuItem value="UT">Utah</MenuItem>
            <MenuItem value="VT">Vermont</MenuItem>
            <MenuItem value="VA">Virginia</MenuItem>
            <MenuItem value="WA">Washington</MenuItem>
            <MenuItem value="WV">West Virginia</MenuItem>
            <MenuItem value="WI">Wisconsin</MenuItem>
            <MenuItem value="WY">Wyoming</MenuItem>
          </TextField>
          <FormControl 
            className={classes.field} 
            style = {{width: '90%'}} 
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-password"> Password</InputLabel>
            <FilledInput 
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {state.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              id="password" 
              name="password"
              onChange={handleChange} 
              required="true" 
              type={state.showPassword ? 'text' : 'password'}
              value={state.password}
            />
          </FormControl>
          <FormControl 
            className={classes.field} 
            style = {{width: '90%'}} 
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-password">Confirm Password</InputLabel>
            <FilledInput 
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {state.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              id="password_confirm" 
              name="password_confirm"
              onChange={handleChange} 
              required="true" 
              type={state.showPassword ? 'text' : 'password'}
              value={state.password_confirm}
            />
          </FormControl>
          <center>
            <Button className={classes.button} size="large" variant="contained" color="secondary" type="submit">
              Submit
            </Button>
          </center>
        </form>
      </Paper>
    </div>
  )
}

SignupForm.propTypes = {
  classes: PropTypes.object
}

export default SignupForm;