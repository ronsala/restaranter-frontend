import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { Menu } from './features/menus/Menu';
// import { fetchMenus } from './features/menu/menuAPI';
import { fetchMenus } from './features/menus/menusSlice';
// import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenus())
  }, [dispatch])

  return (
    <div className="App">
      <h1>Hello, Redux Toolkit 2020</h1>
      <Menu />
    </div>
  );
}

export default App;
