import { useSelector, useDispatch } from 'react-redux';
import { addMenu, getMenus, getMenusSuccess, getMenusFailure } from './menuSlice';
import fetchMenus from './menuAPI'
// import styles from './Menu.module.css';

export function Menu() {
//   const count = useSelector(selectCount);
  // const dispatch = useDispatch();

  return (
    <div>
      <h1>Menu.js</h1>
    </div>
  );
}
