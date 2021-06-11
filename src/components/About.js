import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  desc: {
    textAlign: 'center',
  },
  list: {
    marginLeft: '12.5%',
  },
}));

export const About = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h1">
        About Restauranter
      </Typography>
      <Divider></Divider>
      <br></br>
      <Typography className={classes.desc} variant="body1">
        <strong>Restauranter is an open-source restaurant management web app. A user can act as a Patron and/or Proprietor.</strong>
      </Typography>
      <br></br>
      <br></br>
      <div className="row">
        <div className="column">
          <List className={classes.list}>
            <Typography variant="h2">
                Patrons can ...
            </Typography>
            <br></br>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Order dishes from a menu" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Arrange to pick up or dine in" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Check out" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="sign up for an account for return visits (optional)" />
            </ListItem>
          </List>
        </div>
        <div className="column">
          <List className={classes.list}>
            <Typography variant="h2">
                Proprietors can ...
            </Typography>
            <br></br>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Sign up for an account" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Set up a restaurant and menu" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="See their restaurant&apos;s orders and mark them fulfilled" />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  )
}

export default About;