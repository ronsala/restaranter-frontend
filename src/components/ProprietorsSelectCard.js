import React from 'react';
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

export default function RestaurantsSelectCard() {
  const classes = useStyles();
  
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <center>
            <h1>
              <strong>
                FOR RESTAURANT PROPRIETORS
              </strong>
            </h1>
          </center>
        </CardContent>
        <CardMedia
            component="img"
            alt="A roadside restaurateur tends to his meats in Franceville, Gabon, Central Africa"
            height="140"
            image="images/31462773907_a089a014d8_c.jpg"
            title="Select Proprietors"
          />
          <CardContent>
            <center>
              <Button size="large" variant="contained" color="primary" href="/restauants">I have people to feed: Show me how!</Button>
            </center>
          </CardContent>
      </Card>
    </div>
  );
};
