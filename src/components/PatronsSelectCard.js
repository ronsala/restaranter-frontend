import React from 'react';
import {withRouter} from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 1000
  }
});

export default function PatronsSelectCard() {
  const classes = useStyles();
  
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <center>
              <strong>FOR RESTAURANT PATRONS</strong>
          </center>
        </CardContent>
        <CardMedia
            component="img"
            alt="Photograph of Restaurant Row parking lot in San Marcos, California"
            height="140"
            image="images/800px-San_marcos_restaurant_row.jpg"
            title="Select Patrons"
        />
        <CardContent>
          <Button size="large" variant="contained" color="primary" component={Link} to={"/restaurants"}>I'm hungry: Show me restaurants!</Button>
        </CardContent>
      </Card>
    </div>
  );
};
