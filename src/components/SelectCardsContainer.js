import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProprietorsSelectCard from './ProprietorsSelectCard';
import PatronsSelectCard from './PatronsSelectCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '50%',
    // margin: '-0.5rem',
  }
}));

export const SelectCardsContainer = () => {
  const classes = useStyles();

  return( 
    <div style={{ padding: 1 }}className="select-cards-container">
      <Grid container spacing={1} className={classes.root} >
        <Grid className={classes.root} item xs={6}>
          <ProprietorsSelectCard />
        </Grid>
        <Grid item xs={6}> 
          <PatronsSelectCard />
        </Grid>
      </Grid>
    </div>
  )
}

export default SelectCardsContainer; 