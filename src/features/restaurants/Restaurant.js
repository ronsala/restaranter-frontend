import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import MenuContainer from '../menus/MenuContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    color: '#000',
    textAlign: 'center',
  },
}))

export const Restaurant = (props) => {
  const classes = useStyles();
  const history = useHistory();
  let button = <Button></Button>;

  let currentUserId = useSelector(state => state.users.currentUserId)

  const handleEditButtonClick = () => { history.push(`/restaurants/${props.restaurant.id}/edit`)
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
          Edit Restaurant
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