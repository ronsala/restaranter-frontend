import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: '2%',
    marginBottom: '3%',
  },
  desc: {
    textAlign: 'center',
  },
  field: {
    marginLeft: '5%',
    marginTop: '1%',
    marginBottom: '1%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '90%',
  },
  header: {
    color: '#fff',
    backgroundColor: '#000',
    marginBottom: '2%'
  },
  inputLabel: {
    marginTop: '15%',
    fontSize: '2rem',
  },
  paper: {
    marginRight: '2.5%',
    marginLeft: '2.5%',
    width: '95%',
  },
}));

export const SignupLogin = () => {
  const classes = useStyles();

  const errorMessage = useSelector(state => state.users.error)

  if (errorMessage) {
    alert(errorMessage)
  }

  return (
    <div className="row">
      <div className="column">
        <SignupForm classes={classes} />
      </div>
      <div className="column">
        <LoginForm classes={classes} />
      </div>
    </div>
  )
}

export default SignupLogin;