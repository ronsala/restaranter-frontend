import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import MenuContainer from '../menus/MenuContainer';
import { deleteRestaurant } from './restaurantsSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    color: '#000',
    textAlign: 'center',
  },
  button: {
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '2%',
  },
}))

export const Restaurant = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  let button = <Button></Button>;
  let addMenuButton;

  let currentUserId = useSelector(state => state.users.ids[0])

  const handleAddMenuButtonClick = () => {
    history.push(`/restaurants/${props.restaurant.id}/menus/new`)
  }

  const handleEditButtonClick = () => { 
    history.push(`/restaurants/${props.restaurant.id}/edit`)
  }

  const handleDeleteButtonClick = () => {
    alert('Restaurant Deleted')
    dispatch(deleteRestaurant(props.restaurant.id))
    history.push(`/`);
  }

  if (currentUserId && parseInt(currentUserId) === props.restaurant.attributes.user_id) {
    button = 
      <center>
        <br></br>
        <Button 
          className={classes.button} 
          color="secondary" 
          onClick={handleEditButtonClick}
          size="large" 
          type="submit" 
          variant="contained"
        >
          Edit
        </Button>
        <Button 
          className={classes.button} 
          color="primary" 
          onClick={handleDeleteButtonClick}
          size="large" 
          type="submit" 
          variant="contained"
        >
          Delete
        </Button>
      </center>

    addMenuButton =
      <center>
        <br></br>
        <Button 
          className={classes.button} 
          color="secondary" 
          onClick={handleAddMenuButtonClick}
          size="large" 
          type="submit" 
          variant="contained"
        >
          Add menu
        </Button>
      </center>
  }
  

  return (
    <div>
      { (props && props.restaurant.attributes.name) ? 
        (
          <div>
            <Typography className={classes.root} variant="h1">
              { props.restaurant.attributes.name }
            </Typography>
            <Typography className={classes.root} variant="subtitle1">
              { props.restaurant.attributes.street }, { props.restaurant.attributes.city }, { props.restaurant.attributes.state }
            </Typography>
            { button }
            <br></br>
            <Divider></Divider>
            { addMenuButton }
            <MenuContainer restaurantId={props.restaurant.id} showOrderItems={props.restaurant.attributes.live} />
          </div>
        ) : 
        (<p>Loading...</p>)
      }
    </div>
  );
}

Restaurant.propTypes = {
  restaurant: PropTypes.object,
  page: PropTypes.string
}

export default Restaurant;