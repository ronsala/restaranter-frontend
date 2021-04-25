import { useSelector, useDispatch } from 'react-redux';
import { addMenus, selectMenuById, menusSelector } from './menusSlice';
// import fetchMenus from './menuAPI'
// import styles from './Menu.module.css';

export function Menu() {
  // const menu = useSelector(selectMenuById(state, 2));
  // const dispatch = useDispatch();

  return (
    <div>
      <h1>Menu.js</h1>
      {/* <h1>{ menu.name }</h1> */}
    </div>
  );
}
