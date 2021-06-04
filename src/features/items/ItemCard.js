import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: '#fff',
    fontSize: 15,
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 2
  },
});

export default function ItemCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          { props.name }
        </Typography>
        <Typography variant="body2" component="p">
          { props.desc } { props.price }
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
