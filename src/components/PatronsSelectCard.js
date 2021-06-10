import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  media: {
    display: 'flex',
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    backgroundSize: 'contain',
  },
}));

export const PatronsSelectCard = () => {
  const classes = useStyles();
  
  return (
    <div>
      <Card>
        <CardContent component={Link} to={"/restaurants"}>
          <center>
            <strong>FOR RESTAURANT PATRONS</strong>
          </center>
        </CardContent>
        <CardMedia
          className={classes.media} 
          component={Link} to={"/restaurants"}
          alt="Photograph of Restaurant Row parking lot in San Marcos, California"
          style={{ height: "62.5vh" }}
          image="images/640px-San_marcos_restaurant_row.jpg"
          title="Select Patrons"
        />
        <CardContent>
          <center>
            <Button size="large" variant="contained" color="primary" component={Link} to={"/restaurants"}>
              I&apos;m hungry: Show me restaurants!
            </Button>
          </center>
        </CardContent>
      </Card>
    </div>
  );
}

export default PatronsSelectCard;