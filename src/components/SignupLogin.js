import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: '1.5%',
    marginBottom: '3%',
  },
  desc: {
    textAlign: 'center',
  },
  overline: {
    marginLeft: '5%',
  },
  paper: {
    width: '95%',
  },
  field: {
    marginLeft: '5%',
    marginTop: '1.5%',
    marginBottom: '1.5%',
  },
}));

export const SignupLogin = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
  });

  console.log('state:', state);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    })
  }

  // const handleSubmit = () => {
    
  // };

  return (
    <div>
      <Typography variant="h1">
        Signup / Login
      </Typography>
      <Divider></Divider>
      <br></br>
      <div className="row">
        <div className="column">
          <Paper className={classes.paper}>
            <Typography className={classes.overline} variant="h2">
              <strong>SIGN UP</strong>
            </Typography>
            <Divider></Divider>
            <form noValidate autoComplete="off">
              <TextField 
                className={classes.field} 
                id="firstname" 
                label="First Name" 
                name="firstName" 
                onChange={handleChange} 
                style = {{width: '42.23%'}}
                value={state.firstName}
                variant="filled" 
              />
              <TextField 
                className={classes.field} 
                id="lastname" 
                label="Last Name" 
                name="lastName"
                onChange={handleChange} 
                style = {{width: '42.23%'}} 
                value={state.lastName} 
                variant="filled" 
              />
              <br></br>
              <TextField 
                className={classes.field} 
                id="email" 
                label="Email" 
                name="email"
                onChange={handleChange} 
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
                style = {{width: '59.5%'}} 
                value={state.city}
                variant="filled" 
              />
              <Select 
                className={classes.field} 
                id="state" 
                label="State" 
                name="state"
                onChange={handleChange} 
                style = {{width: '25%'}} 
                value={state.state}
                variant="filled" 
              >
                <MenuItem value="">--</MenuItem>
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
              </Select>
              <center>
                <Button className={classes.button} size="large" variant="contained" color="secondary" type="submit">
                  Submit
                </Button>
              </center>
            </form>
          </Paper>
          <br></br>
        </div>
        <div className="column">
          <Typography variant="overline">
            <strong>Proprietors can ...</strong>
          </Typography>
          <br></br>
        </div>
      </div>
    </div>
  )
}

export default SignupLogin;