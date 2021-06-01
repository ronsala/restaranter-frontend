import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit'
import { 
  fetchMenu, 
  selectMenuByRestaurantId, 
  menusSelectors,
} from './menusSlice';
import { Menu } from "./Menu";

export const MenuContainer = (props) => {
  const dispatch = useDispatch();
  // let menu = useSelector(state => selectMenuByRestaurantId(state, props.restaurantId));
  // let menu = useSelector(menusSelectors.selectAll)
  let { status, error } = useSelector(state => state.menus)

  useEffect(() => {
    // if (!menu) {
      dispatch(fetchMenu(props.restaurantId))
    // }
  }, [dispatch, props.restaurantId])

  console.log('props:', props);

  const restaurantId = props.restaurantId;

  console.log('restaurantId:', restaurantId);

  const menusEntities = useSelector((state) => state.menus.entities);

  console.log('menusEntities:', menusEntities);

  const menusEntitiesArray = Object.entries(menusEntities);

  console.log('menusEntitiesArray:', menusEntitiesArray);

  const menusEntitiesPreparedArray = menusEntitiesArray[0];

  console.log('menusEntitiesPreparedArray:', menusEntitiesPreparedArray);

  const isObject = (element) => {
    return typeof element === 'object'
  }

  const menusEntitiesFilteredArray = menusEntitiesPreparedArray?.filter(isObject)

  const isRestaurantMenu = (menu) => {
    console.log('menu in isRestaurantMenu:', menu);
    return menu.attributes.restaurant_id == restaurantId
  }
// debugger
  // const selectMenu = (menusEntitiesArray) => {
    // if (menusEntitiesArray) { 
      // const menu = menusEntitiesPreparedArray.find( ({ restaurant_id }) => restaurant_id === restaurantId);
      // if (menusEntitiesFilteredArray) {
        const restaurantMenu = menusEntitiesFilteredArray?.find(isRestaurantMenu);
        console.log('restaurantMenu in MenuContainer:', restaurantMenu);
      // }
      console.log('menusEntities:', menusEntities)
      // return menu;
    // }
  // }

  // let menu = useSelector(state => selectMenu(state, props.restaurantId));
  // const menu = useSelector(state => selectMenu(props.restaurantId))

  // console.log('menu:', menu);

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