import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenu } from './menusSlice';
import { Menu } from "./Menu";

export const MenuContainer = (props) => {
  const dispatch = useDispatch();
  let { status, error } = useSelector(state => state.menus)

  useEffect(() => {
    if (!restaurantMenu) {
      dispatch(fetchMenu(props.restaurantId))
    }
  }, [dispatch, props.restaurantId])

  const restaurantId = props.restaurantId;
  console.log('typeof props.restaurantId:', typeof props.restaurantId);
  const menusEntities = useSelector((state) => state.menus.entities);
  const menusEntitiesArray = Object.entries(menusEntities);
  const menusEntitiesFilteredArray = menusEntitiesArray.flat().filter(element => typeof element === 'object')
  const restaurantMenu = menusEntitiesFilteredArray?.find(menu => menu.attributes.restaurant_id == restaurantId);

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

export default MenuContainer;