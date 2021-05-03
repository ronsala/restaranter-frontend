import { useSelector, useDispatch } from 'react-redux';
import { addMenus, selectMenuById, menusSelectors } from './menusSlice';
// import fetchMenus from './menuAPI'
// import styles from './Menu.module.css';

export const Menu = () => {
  // const { menuId } = match.params
  // const menu = useSelector((state) => selectMenuById(state, 2));
  // const dispatch = useDispatch();
  // console.log('menus in Menu.js:', menus);
  const menus = useSelector(menusSelectors.selectAll);
  console.log('menus:', menus);

  return (
    <div>
      <h1>Menu.js</h1>
      {/* <h1>{ menus[0].attributes.name }</h1> */}
    </div>
  );
}
