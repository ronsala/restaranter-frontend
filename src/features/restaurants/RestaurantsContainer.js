import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { 
  fetchRestaurants, 
  selectAllRestaurants, 
} from './restaurantsSlice';
import RestaurantsTable from './RestaurantsTable';

export const RestaurantsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch])

  let allRestaurants = useSelector(state => selectAllRestaurants(state))

  let liveRestaurants = allRestaurants
    .filter(restaurant => restaurant.attributes.live === true)

  let { status, error } = useSelector(state => state.restaurants);

  switch (status) {
    case 'idle':
      return null;
    case 'loading':
      return (<div>Loading...</div>)
    case 'succeeded':
      return (
        <div>
          <Typography variant="h1" style={{textAlign: 'center'}}>
            Restaurants
          </Typography>
          <Divider></Divider>
          <RestaurantsTable restaurants={liveRestaurants} />
        </div>
      )
    case 'failed':
      return (<div>{error}</div>)
    default:
      return (<div>Unknown error</div>)
  }
}

export default RestaurantsContainer;