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

export const ProprietorsSelectCard = () => {
  const classes = useStyles();
  
  return (
    <div>
      <Card>
        <CardContent component={Link} to={"/proprietors"}>
          <center>
            <h1>
              <strong>
                FOR RESTAURANT PROPRIETORS
              </strong>
            </h1>
          </center>
        </CardContent>
        <CardMedia 
          className={classes.media} 
          component={Link} to={"/proprietors"} 
          alt="A roadside restaurateur tends to his meats in Franceville, Gabon, Central Africa"
          style={{ height: "64vh" }} 
          image="images/31462773907_a089a014d8_c.jpg"
          title="Select Proprietors"
          />
          <CardContent>
            <center>
              <Button size="large" variant="contained" color="primary" component={Link} to={"/proprietors"}>
                Hungry people want to patronize my restaurant!
              </Button>
            </center>
          </CardContent>
      </Card>
    </div>
  );
}

export default ProprietorsSelectCard;