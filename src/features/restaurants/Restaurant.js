import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuContainer from '../menus/MenuContainer';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 30,
    color: '#000000',
    marginTop: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center', 
  },
  pos: {
    marginBottom: 2
  },
});

export const Restaurant = (props) => {
  const classes = useStyles();

  return (
    <div>
      { (props && props.restaurant.attributes.name) ? 
        (
          <div>
            <Typography className={classes.title} variant="h5" component="h2">
              { props.restaurant.attributes.name }
            </Typography>
            <Typography className={classes.subtitle}>
              <h2>{ props.restaurant.attributes.street }, { props.restaurant.attributes.city }, { props.restaurant.attributes.state }</h2>
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
