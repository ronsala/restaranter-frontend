import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { fetchMenu } from './menusSlice';
import { Menu } from "./Menu";
import OrderItemsContainer from '../orderitems/OrderItemsContainer';

export const MenuContainer = (props) => {
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.menus)
  const restaurantId = parseInt(props.restaurantId)
  let restaurantMenu;
  let showOrderItems = props.showOrderItems;

  useEffect(() => {
    if (!restaurantMenu) {
      dispatch(fetchMenu(props.restaurantId))
    }
  }, [dispatch, props.restaurantId, restaurantMenu])

  restaurantMenu = Object
    .entries(useSelector((state) => state.menus.entities))
    .flat()
    .filter(element => typeof element === 'object')
    .find(menu => menu.attributes.restaurant_id === restaurantId);

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
              </Grid>) :
              (<div></div>)
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