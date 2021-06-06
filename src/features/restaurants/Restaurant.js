import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuContainer from '../menus/MenuContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    color: '#000',
    textAlign: 'center',
  },
}))

export const Restaurant = (props) => {
  const classes = useStyles();

  return (
    <div>
      { (props && props.restaurant.attributes.name) ? 
        (
          <div>
            <Typography className={classes.root} variant="h1">
              { props.restaurant.attributes.name }
            </Typography>
            <Typography className={classes.root} variant="subtitle1">
              { props.restaurant.attributes.street }, { props.restaurant.attributes.city }, { props.restaurant.attributes.state }
            </Typography>
            <div>
              <MenuContainer restaurantId={props.restaurant.id}/>
            </div>
          </div>
        ) : 
        (<p>Loading...</p>)
      }
    </div>
  );
}
