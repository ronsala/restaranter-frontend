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
                FOR RESTAURANT PATRONS
              </strong>
            </h1>
          </center>
        </CardContent>
        <CardMedia
            component="img"
            alt="Photograph of Restaurant Row parking lot in San Marcos, California"
            height="140"
            image="images/800px-San_marcos_restaurant_row.jpg"
            title="Select Restaurants"
        />
        <CardContent>
          <center>
            <Button size="large" variant="contained" color="primary" href="/restauants">I'm hungry: Show me restaurants!</Button>
          </center>
        </CardContent>
      </Card>
    </div>
  );
};
