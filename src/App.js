import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { Menu } from './features/menus/Menu';
// import { fetchMenus } from './features/menu/menuAPI';
import { fetchMenus, selectMenus } from './features/menus/menusSlice';
// import './App.css';

function App() {

  const dispatch = useDispatch();
  // console.log('menus[0] in App.js:', menus[0]);
  
  
  useEffect(() => {
    dispatch(fetchMenus())
  }, [dispatch])
  
  const { menus } = useSelector(selectMenus);
  console.log('menus in App.js:', menus);
  // debugger
  return (
    <div className="App">
      <h1>Hello, Redux Toolkit 2020</h1>
      {/* <p>{ menus[0].attributes.name }</p> */}
      <Menu />
    </div>
  );
}

export default App;
