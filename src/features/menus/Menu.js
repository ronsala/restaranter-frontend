import React from 'react';
import { PropTypes } from 'prop-types';
import SectionsContainer from '../sections/SectionsContainer';

export const Menu = (props) => {
  return (
      <SectionsContainer menu={props.menu} />
  )
}

Menu.propTypes = {
  menu: PropTypes.object,
};

export default Menu;