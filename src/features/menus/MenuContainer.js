import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { fetchMenu } from './menusSlice';
import { Menu } from "./Menu";
import { deleteMenu } from './menusSlice'
import OrderItemsContainer from '../orderitems/OrderItemsContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    whiteSpace: 'nowrap', 
  }, 
  button: {
    marginLeft: '5%', 
  },
}))

export const MenuContainer = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { status, error } = useSelector(state => state.menus)
  const restaurantId = parseInt(props.restaurantId)
  let showOrderItems = props.showOrderItems;
  // let restaurantMenu;

  let restaurantMenu = Object
    .entries(useSelector((state) => state.menus.entities))
    .flat()
    .filter(element => typeof element === 'object')
    .find(menu => menu.attributes.restaurant_id === restaurantId);

  const handleAddSectionButtonClick = () => {
    history.push(`/restaurants/${restaurantId}/menus/${restaurantMenu.id}/sections/new`)
  }

  const handleEditButtonClick = () => { 
    history.push(`/restaurants/${restaurantId}/menus/${restaurantMenu.id}/edit`)
  }

  const handleDeleteButtonClick = () => {
    alert('Menu Deleted')
    dispatch(deleteMenu(restaurantMenu.id))
    history.push(`/restaurants/${restaurantId}`);
  }

  let buttons =
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
      <Button 
        className={classes.button} 
        color="secondary" 
        onClick={handleAddSectionButtonClick}
        size="large" 
        type="submit" 
        variant="contained"
      >
        Add menu section
      </Button>
    </center>

  useEffect(() => {
    if (!restaurantMenu) {
      dispatch(fetchMenu(props.restaurantId))
    }
  }, [dispatch, props.restaurantId, restaurantMenu])

  switch (status) {
    case 'idle':
      return null;
    case 'loading':
      return (<div>Loading...</div>)
    case 'succeeded':
      return (
        <Grid style={{ padding: 10 }} container spacing={5}>
          <Grid item xs={8}>
            <Menu menu={restaurantMenu} />
          </Grid>
          { showOrderItems ?
              (<Grid item xs={4}> 
                <OrderItemsContainer />
              </Grid>) 
              :
              restaurantMenu ?
                (<div className={classes.root}>
                  { buttons }
                </div>)
                :
                <div></div>
          }

        </Grid>
      )
    case 'failed':
      return (<div>{error}</div>)
    default:
      return (<div>Unknown error</div>)
  }
}

MenuContainer.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  showOrderItems: PropTypes.bool
}

export default MenuContainer;