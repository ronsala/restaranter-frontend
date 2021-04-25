import { useSelector, useDispatch } from 'react-redux';
import { addMenus, selectMenuById, menusSelector } from './menusSlice';
// import fetchMenus from './menuAPI'
// import styles from './Menu.module.css';

export const Menu = () => {
  // const { menuId } = match.params
  // debugger
  const menu = useSelector((state) => selectMenuById(state, 2));
  // const dispatch = useDispatch();
  // console.log('menus in Menu.js:', menus);

  return (
    <div>
      <h1>Menu.js</h1>
      {/* <h1>{ menu.name }</h1> */}
    </div>
  );
}
