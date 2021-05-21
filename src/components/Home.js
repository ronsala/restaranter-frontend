import SelectCardsContainer from './SelectCardsContainer';
import RestaurantsContainer from '../features/restaurants/RestaurantsContainer'
import { Menu } from '../features/menus/Menu'

// TODO: RestaurantsContainer and Menu component here temporarily for development.
export default function Home() {
  return (
    <div>
      <RestaurantsContainer />
      <Menu />
      <SelectCardsContainer />
    </div>
  )
}
