import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  fetchMenu, 
  selectMenuById, 
} from './menusSlice';
import { Menu } from "./Menu";

export const MenuContainer = ({match}) => {
  const { menuId } = match.params
  const dispatch = useDispatch();
  let menu = useSelector(state => selectMenuById(state, menuId));

  useEffect(() => {
    if (!menu) {
      dispatch(fetchMenu(menuId))
    }
  }, [dispatch, menu, menuId])

  return (
    <div>
      <Menu menu={menu} />
    </div>
  )
}

export default MenuContainer;