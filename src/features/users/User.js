import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    color: '#000',
    textAlign: 'center',
  },
  bottomInset: {
    marginLeft: '10%',
    marginBottom: '1%',
  },
  button: {
    marginTop: '6%',
    marginRight: '5%',
    marginBottom: '3%',
  },
  field: {
    marginLeft: '5%',
    // marginTop: '1%',
    marginBottom: '1%',
    width: '200%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
  },
  inputLabel: {
    marginLeft: '5%',
  },
  topInset: {
    marginLeft: '5.5%',
    marginBottom: '1%',
  },
  paper: {
    marginRight: '2.5%',
    marginLeft: '2.5%',
    width: '95%',
  },
}))

export const User = (props) => {
  const classes = useStyles();

let buttonText;
let displayMode;
let selectOn;

const [state, setState] = useState({
  first_name: props.user.attributes.first_name,
  last_name: props.user.attributes.last_name,
  email: props.user.attributes.email,
  street: props.user.attributes.street,
  city: props.user.attributes.city,
  state: props.user.attributes.state,
  new_password: '',
  new_password_confirm: '',
  showPassword: false,
  editMode: false,
});

const handleChange = (e) => {
  const value = e.target.value;
  if (state.editMode === true) {
    setState({
      ...state,
      [e.target.name]: value
    })
  }
}

const handleClickShowPassword = () => {
  // setState({ ...state, showPassword: !props.user.attributes.showPassword });
};

const handleEditButtonClick = (e) => {
  buttonText = 'Submit'
  displayMode = { display: 'inline' }
  selectOn = true
  setState({
    editMode: true
  })
}

const handleMouseDownPassword = (e) => {
  e.preventDefault();
};

const handleSubmit = (e) => {
  e.preventDefault();
};

if (state.editMode === false) {
  buttonText = 'Edit'
  displayMode = { display: 'none' }
  selectOn = false
} else {
  buttonText = 'Submit'
  displayMode = { display: 'inline' }
  selectOn = true
}

  return (
    <div>
      { (props && props.user) ? 
        (
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h3">
                  View My Account
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper className={classes.paper}>
                  <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="column">
                        <div className={classes.topInset}>
                          <InputLabel 
                            className={classes.inputLabel} 
                            htmlFor="first_name">
                              First Name
                          </InputLabel>
                          <TextField 
                            className={classes.field} 
                            id="first_name" 
                            name="first_name" 
                            onChange={handleChange} 
                            required={state.editMode} 
                            style = {{width: '90%'}}
                            value={state.first_name}
                            variant="filled" 
                          />
                        </div>
                      </div>
                      <div className="column">
                        <InputLabel 
                          className={classes.inputLabel} 
                          htmlFor="last_name">
                            Last Name
                        </InputLabel>
                        <TextField 
                          className={classes.field} 
                          id="last_name" 
                          name="last_name"
                          onChange={handleChange} 
                          required={state.editMode} 
                          style = {{width: '85%'}} 
                          value= {state.last_name} 
                          variant="filled" 
                        />
                      </div>
                    </div>
                    <InputLabel 
                      className={classes.inputLabel} 
                      htmlFor="email">
                        Email
                    </InputLabel>
                    <TextField 
                      className={classes.field} 
                      id="email" 
                      onChange={handleChange} 
                      required={state.editMode} 
                      style = {{width: '90%'}} 
                      value={state.email} 
                      variant="filled" 
                    />
                    <InputLabel 
                      className={classes.inputLabel} 
                      htmlFor="street">
                        Street
                    </InputLabel>
                    <TextField 
                      className={classes.field} 
                      id="street" 
                      name="street"
                      onChange={handleChange} 
                      required={state.editMode} 
                      style = {{width: '90%'}} 
                      value={state.street}
                      variant="filled" 
                    />
                    <div className="row">
                      <div className="column">
                        <div className={classes.bottomInset}>
                          <InputLabel 
                            className={classes.inputLabel} 
                            htmlFor="street">
                             City 
                          </InputLabel>
                          <TextField 
                            className={classes.field} 
                            id="city" 
                            name="city"
                            onChange={handleChange} 
                            required={state.editMode} 
                            style = {{width: '95%'}} 
                            value={state.city}
                            variant="filled" 
                          />
                        </div>
                      </div>
                      <div className="column">
                        <div className={classes.bottomInset}>
                          <InputLabel 
                            className={classes.inputLabel} 
                            htmlFor="state">
                              State
                          </InputLabel>
                          <TextField
                            className={classes.field} 
                            id="state" 
                            name="state"
                            onChange={handleChange} 
                            required={state.editMode} 
                            select={selectOn} 
                            style = {{width: '50%'}} 
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
                            <MenuItem value="DC">District of Columbia</MenuItem>
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
                        </div>
                      </div>
                      <div style={displayMode}>
                        <FormControl 
                          className={classes.field} 
                          variant="filled"
                        >
                          <InputLabel htmlFor="new_password">Set New Password</InputLabel>
                          <FilledInput 
                            autoComplete="on"
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {props.user.attributes.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            }
                            id="new_password" 
                            name="new_password"
                            onChange={handleChange} 
                            required={state.editMode} 
                            style = {{width: '40%'}} 
                            type={state.showPassword ? 'text' : 'password'}
                            value={state.new_password}
                          />
                        </FormControl>
                        <FormControl 
                          className={classes.field} 
                          // style = {{width: '90%'}} 
                          variant="filled"
                        >
                          <InputLabel htmlFor="filled-adornment-password">Confirm New Password</InputLabel>
                          <FilledInput 
                            autoComplete="on"
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {props.user.attributes.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            }
                            id="password_confirm" 
                            name="password_confirm"
                            onChange={handleChange} 
                            required={state.editMode} 
                            style = {{width: '40%'}} 
                            type={props.user.attributes.showPassword ? 'text' : 'password'}
                            value={state.new_password_confirm}
                          />
                        </FormControl>
                      </div>
                      <div  style={{display: 'block'}}>
                        <center>
                          <Button 
                            className={classes.button} 
                            color="secondary" 
                            onClick={handleEditButtonClick}
                            size="large" 
                            variant="contained" 
                          >
                            { buttonText }
                          </Button>
                        </center>
                        <center>
                            <Button 
                              className={classes.button} 
                              color="primary" 
                              size="large" 
                              type="submit" 
                              variant="contained" 
                            >
                              DELETE
                            </Button>
                          </center>
                      </div>
                    </div>
                  </form>
                </Paper>
              </AccordionDetails>
            </Accordion>
          </div>
        ) :
        (<div>Loading...</div>)
      }
    </div>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  page: PropTypes.string
}

export default User;