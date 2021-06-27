import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Buttons from '../../components/Buttons';
import { fetchMenu } from './menusSlice';
import { Menu } from "./Menu";
import { deleteMenu } from './menusSlice'
import OrderItemsContainer from '../orderitems/OrderItemsContainer';
// import { selectRestaurantById } from '../restaurants/restaurantsSlice';

export const MenuContainer = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { status, error } = useSelector(state => state.menus)
  const restaurantId = parseInt(props.restaurantId)
  // const restaurant = useSelector(state => selectRestaurantById(state, restaurantId))

  let restaurantMenu = Object
    .entries(useSelector((state) => state.menus.entities))
    .flat()
    .filter(element => typeof element === 'object')
    .find(menu => menu.attributes.restaurant_id === restaurantId);

  useEffect(() => {
    if (!restaurantMenu) {
      dispatch(fetchMenu(props.restaurantId))
    }
  }, [dispatch, props.restaurantId, restaurantMenu])

  const handleAddButtonClick = () => {
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

  const buttons = <Buttons handleEditButton={handleEditButtonClick}  handleDeleteButton={handleDeleteButtonClick} handleAddButton={handleAddButtonClick} modelId={parseInt(restaurantMenu?.id)} child={'Section'} />

  switch (status) {
    case 'idle':
      return null;
    case 'loading':
      return (<div>Loading...</div>)
    case 'succeeded':
      return (
        <Grid style={{ padding: 10 }} container spacing={5}>
          <Grid item xs={8}>
            <Menu menu={restaurantMenu} live={props.live} proprietorView={props.proprietorView} />
          </Grid>
          { props.live && !props.proprietorView
              ? (<Grid item xs={4}> 
                  <OrderItemsContainer restaurantId={restaurantId} />
                </Grid>) 
              : restaurantMenu 
                ? <div>
                    { buttons }
                  </div>
                : <div></div>
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
  live: PropTypes.bool, 
  restaurantId: PropTypes.string.isRequired,
  proprietorView: PropTypes.bool,
}

export default MenuContainer;