import React from 'react';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: '100%',
    background: '#fff',
    paddingBottom: 20
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 2
  },
  background: {
    background: '#fff'
  }
});

export const RestaurantCard = (props) => {
  const classes = useStyles();

  return (
    <div>
      <br></br>
    <Card className={classes.root} component={Link} to={`restaurants/${props.id}`}>
      <CardContent className={classes.background}>
        <Typography variant="h5" component="h2">
          { props.name }
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          { props.street }, { props.city }, { props.state }
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        </Typography>
        <Typography variant="body2" component="p">
          { props.desc }
          <br />
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

RestaurantCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default RestaurantCard;