import RestaurantsSelectCard from './RestaurantsSelectCard';
import ProprietorsSelectCard from './ProprietorsSelectCard';
import Grid from '@material-ui/core/Grid';

export default function SelectCardsContainer() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <ProprietorsSelectCard />
        </Grid>
        <Grid item xs={4}>
          <RestaurantsSelectCard />
        </Grid>
      </Grid>
    </div>
  )
}