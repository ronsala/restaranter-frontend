import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { patchRestaurant, postRestaurant } from './restaurantsSlice';
import { 
  fetchRestaurant, 
  selectRestaurantById, 
} from './restaurantsSlice'

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: '2%',
    marginBottom: '3%',
  },
  desc: {
    textAlign: 'center',
  },
  field: {
    marginLeft: '5%',
    marginTop: '1%',
    marginBottom: '1%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '90%',
  },
  header: {
    color: '#fff',
    backgroundColor: '#000',
    marginBottom: '2%'
  },
  inputLabel: {
    marginTop: '15%',
    fontSize: '2rem',
  },
  paper: {
    marginRight: '2.5%',
    marginLeft: '2.5%',
    width: '95%',
  },
}));

export const RestaurantForm = ({match}) => {
  let { restaurantId } = match.params
  let url = match.url
  let dirs = url.split('/')
  let page = dirs[(dirs.length -1)]
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = parseInt(useSelector(state => state.users.ids[0]));
  let restaurantToEdit = useSelector(state => selectRestaurantById(state, restaurantId));

  useEffect(() => {
    if (!restaurantToEdit && restaurantId) {
      dispatch(fetchRestaurant(restaurantId))
    }
  }, [dispatch, restaurantToEdit, restaurantId])

  const [state, setState] = useState({
    name: '' || restaurantToEdit?.attributes.name,
    street: '' || restaurantToEdit?.attributes.street,
    city: '' || restaurantToEdit?.attributes.city,
    state: '' || restaurantToEdit?.attributes.state,
    desc: '' || restaurantToEdit?.attributes.desc,
    restaurant_id: '' || restaurantToEdit?.id, 
    user_id: userId,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    })
  }

  // setTimeout gives time for store to be updated before rendering.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (restaurantToEdit) {
      dispatch(patchRestaurant(state)) 
      setTimeout(() => {
        history.push(`/restaurants/${restaurantToEdit.id}`)   
      }, 1000)
    } else {
      dispatch(postRestaurant(state))
      .then(setTimeout(() => {
        history.push(`/restaurants/route_new`)
      }, 1000))
    }
  };

  return (
    <div>
      { userId ?
        (
          <div>
            <Paper className={classes.paper}>
              <Typography className={classes.header} variant="h2">
                {page.toUpperCase()} RESTAURANT
              </Typography>
              <form noValidate autoComplete="on" onSubmit={handleSubmit}>
                <TextField 
                  className={classes.field} 
                  id="name" 
                  label="Restaurant Name" 
                  name="name" 
                  onChange={handleChange} 
                  required={true} 
                  style = {{width: '90%'}}
                  value={state.name}
                  variant="filled" 
                />
                <TextField 
                  className={classes.field} 
                  id="street" 
                  label="Street" 
                  name="street"
                  onChange={handleChange} 
                  required={true} 
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
                  required={true} 
                  style = {{width: '60%'}} 
                  value={state.city}
                  variant="filled" 
                />
                <TextField 
                  className={classes.field} 
                  defaultValue="" 
                  id="state" 
                  label="State" 
                  name="state"
                  onChange={handleChange} 
                  required={true} 
                  select={true} 
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
                  <MenuItem value="DC">District of Colombia</MenuItem>
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
                <TextField 
                  className={classes.field} 
                  id="desc" 
                  label="Description" 
                  name="desc"
                  onChange={handleChange} 
                  required={true} 
                  style = {{width: '90%'}} 
                  value={state.desc}
                  variant="filled" 
                />
                <center>
                  <Button className={classes.button} size="large" variant="contained" color="secondary" type="submit">
                    Submit
                  </Button>
                </center>
              </form>
            </Paper>
          </div>
        ) : 
        (<p>Please log in to view this page.</p>)
      }
    </div>
  )
}

RestaurantForm.propTypes = {
  match: PropTypes.object.isRequired,
}

export default RestaurantForm;