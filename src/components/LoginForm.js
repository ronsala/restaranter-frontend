import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export const LoginForm = (props) => {
  const classes = props.classes;

  const [state, setState] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

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
          LOG IN
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField 
            className={classes.field} 
            id="login_email" 
            label="Email" 
            name="email"
            onChange={handleChange} 
            required={true} 
            style = {{width: '90%'}} 
            value={state.email} 
            variant="filled" 
          />
          <FormControl 
            className={classes.field} 
            style = {{width: '90%'}} 
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-password"> Password</InputLabel>
            <FilledInput 
              autoComplete="on"
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
              id="login_password" 
              name="password"
              onChange={handleChange} 
              required={true} 
              type={state.showPassword ? 'text' : 'password'}
              value={state.password}
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

LoginForm.propTypes = {
  classes: PropTypes.object
}

export default LoginForm;