import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenus, menusSelectors } from './menusSlice';

export const Menu = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenus())
  }, [dispatch])

  const menus = useSelector(menusSelectors.selectAll);

  return (
    <div>
      { (typeof menus[0] !== 'undefined') ? (
        <h1>{ menus[0].attributes.name }</h1> 
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
