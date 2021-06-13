import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    color: '#000',
    textAlign: 'center',
  },
}))

export const User = (props) => {
  const classes = useStyles();

  return (
    <div>
      { (props && props.user) ? 
        (
          <div>
            <Typography className={classes.root} variant="h1">
              { props.user.attributes.first_name } { props.user.attributes.last_name }
            </Typography>
            <Typography className={classes.root} variant="subtitle1">
              { props.user.attributes.street }, { props.user.attributes.city }, { props.user.attributes.state }
            </Typography>
            <Divider></Divider>
          </div>
        ) : 
        (<p>Keep on Loading...</p>)
      }
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  page: PropTypes.string
}

export default User;