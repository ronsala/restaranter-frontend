import { useSelector, useDispatch } from 'react-redux';
import { addMenu, getMenus, getMenusSuccess, getMenusFailure } from './menuSlice';
import fetchMenus from './menuAPI'
// import styles from './Menu.module.css';

export function Menu() {
  // const menu = useSelector(selectMenuById(2));
  // const dispatch = useDispatch();

  return (
    <div>
      <h1>Menu.js</h1>
      {/* <h1>{ menu.name }</h1> */}
    </div>
  );
}
