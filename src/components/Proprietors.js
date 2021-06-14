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
    // marginLeft: '12.5%',
  },
  listItem: {
    marginLeft: '35%',
  },
}));

export const About = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h1">
        Proprietors
      </Typography>
      <Divider></Divider>
      <br></br>
      <Typography className={classes.desc} variant="body1">
        <strong>Running a restaurant can be one of the most rewarding professions. Your creativity, drive, and love of providing for people makes your establishment what it is. Restauranter can help by providing quick, convenient ways to reach out to new patrons.</strong>
      </Typography>
      <br></br>
      <br></br>
          <List className={classes.list}>
            <Typography variant="h2">
              As a Restauranter Proprietor you can ...
            </Typography>
            <br></br>
            <ListItem className={classes.listItem}>
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Set up a restaurant and menu" />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="See your restaurant&apos;s orders and mark them fulfilled" />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Have more time for making your magic!" />
            </ListItem>
          </List>
          <br></br>
          <br></br>
          <Typography className={classes.desc} variant="body1">
            <strong>Just sign up or log in above.</strong>
          </Typography>
      </div>
  )
}

export default About;