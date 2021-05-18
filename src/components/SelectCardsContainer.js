import Grid from '@material-ui/core/Grid';
import ProprietorsSelectCard from './ProprietorsSelectCard'
import PatronsSelectCard from './PatronsSelectCard'

function SelectCardsContainer() {
  return(
    <Grid container spacing={2}>
      <Grid item xl={6} md={6} sm={12} xs={12}>
        <ProprietorsSelectCard />
      </Grid>
      <Grid item xl={6} md={6} sm={12} xs={12}> 
        <PatronsSelectCard />
      </Grid>
    </Grid>
  )
}

export default SelectCardsContainer; 