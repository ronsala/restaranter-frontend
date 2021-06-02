import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 2
  },
});

export default function SectionCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} component={Link} to={`restaurants/${props.id}`}>
      <CardContent>
        <Typography variant="h5" component="h2">
          { props.name }
        </Typography>
      </CardContent>
    </Card>
  );
}
