import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenu } from './menusSlice';
import { Menu } from "./Menu";

export const MenuContainer = (props) => {
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.menus)
  const restaurantId = parseInt(props.restaurantId)
  let restaurantMenu;

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
        <div>
          <Menu menu={restaurantMenu} />
        </div>
      )
    case 'failed':
      return (<div>{error}</div>)
    default:
      return (<div>Unknown error</div>)
  }
}

MenuContainer.propTypes = {
  restaurantId: PropTypes.string.isRequired,
}

export default MenuContainer;