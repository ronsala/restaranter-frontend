import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import RestaurantMenuIconRounded from '@material-ui/icons/RestaurantMenuRounded';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { removeAllUsers, setStatusIdle } from '../features/users/usersSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginLeft: '8%',
    whiteSpace: 'nowrap',
  },
  toolbar: {
    justifyContent: 'space-evenly',
  },
  title: {
    flexGrow: 1,
    fontSize: '2.5rem',
    marginLeft: '5%',
  },
}));

export const AppBarMain = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  let accountButton;
  let currentUserIdString = useSelector(state => state.users.ids[0]);
  let currentUserId = parseInt(currentUserIdString);
  let signupLogoutButton;
  let users = useSelector(state => state.users);

  const handleLogout = () => {
    history.push(`/`)
    dispatch(removeAllUsers(users))
    dispatch(setStatusIdle('idle'))
  }

  if (currentUserId) {
    accountButton = 
      <Button 
        className={classes.button} 
        color="inherit" 
        component={Link} to={`/users/${currentUserId}`}
      >
        A c c o u n t 
      </Button> 

    signupLogoutButton = 
      <Button 
        className={classes.button} 
        color="inherit" 
        onClick={handleLogout}
      >
        L o g o u t
      </Button>
  } else {
    accountButton = <div></div>

    signupLogoutButton = 
      <Button 
        className={classes.button} 
        color="inherit" 
        component={Link} to={"/signuplogin"}
      >
        S i g n u p / L o g i n
      </Button>
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button 
            color="inherit" 
            component={Link} to={"/"}>
            <RestaurantMenuIconRounded 
              className={classes.title} 
              color="secondary" 
              fontSize="large"
            >
            </RestaurantMenuIconRounded>
            <Typography 
              variant="h6" 
              className={classes.title} 
              color="secondary"
            >
              Restauranter
            </Typography>
          </Button>
          <Button 
            className={classes.button} 
            color="inherit" 
            component={Link} to={"/about"}
          >
            A b o u t
          </Button>
          <Button 
            className={classes.button} 
            color="inherit" 
            component={Link} to={"/proprietors"}
          >
            P r o p r i e t o r s
          </Button>
          <Button 
            className={classes.button} 
            color="inherit" 
            component={Link} to={"/restaurants"}
          >
            P a t r o n s
          </Button>
          { accountButton }{ signupLogoutButton }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppBarMain;