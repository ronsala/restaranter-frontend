import Grid from '@material-ui/core/Grid';
import ProprietorsSelectCard from './ProprietorsSelectCard'
import PatronsSelectCard from './PatronsSelectCard'

function SelectCardsContainer() {
  return(
    <div>
    <Grid container spacing={1}>
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