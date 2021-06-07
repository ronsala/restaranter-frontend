import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import SectionsContainer from '../sections/SectionsContainer'

export const Menu = (props) => {
  return (
    <form>
      <SectionsContainer menu={props.menu} />
      <br></br>
      <Button size="large" variant="contained" color="primary" component={Link} to={"/orderitems"}>Review Order</Button>
     </form>
  )
}

Menu.propTypes = {
  menu: PropTypes.object,
};

export default Menu;