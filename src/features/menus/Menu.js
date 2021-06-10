import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SectionsContainer from '../sections/SectionsContainer';

const useStyles = makeStyles((theme) => ({
  menuheader: {
    color: '#fff',
    backgroundColor: '#000',
  },
  branch: {
    minWidth: 375,
  }
}));

export const Menu = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.menuheader} variant="h3" align="center" >
        MENU
      </Typography>
      <SectionsContainer menu={props.menu} />
    </div>
  )
}

Menu.propTypes = {
  menu: PropTypes.object,
};

export default Menu;