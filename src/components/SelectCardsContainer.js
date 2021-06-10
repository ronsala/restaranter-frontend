import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProprietorsSelectCard from './ProprietorsSelectCard';
import PatronsSelectCard from './PatronsSelectCard';

export const SelectCardsContainer = () => {

  return( 
    <div style={{ padding: 1 }}className="select-cards-container">
      <Grid container spacing={8}>
        <Grid item xs={6}>
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