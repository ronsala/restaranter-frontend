import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
//     left: '2rem',
  },
  title: {
    flexGrow: 1,
  },
}));

export const AppBarMain = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit" component={Link} to={"/"}>
            <Typography variant="h6" className={classes.title}>
              R e s t a u r a n t e r
            </Typography>
          </Button>
          <Button  color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppBarMain;