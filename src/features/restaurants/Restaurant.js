import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuContainer from '../menus/MenuContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    color: '#000',
    fontSize: theme.typography.pxToRem(32),
    fontWeight: theme.typography.fontWeightRegular,
    marginTop: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightRegular,
    color: '#000',
    textAlign: 'center', 
  },
  pos: {
    marginBottom: 2
  },
}))

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
            <Typography className={classes.subtitle} variant="h5" component="h2">
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
