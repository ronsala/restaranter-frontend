import RestaurantsSelectCard from './RestaurantsSelectCard';
import ProprietorsSelectCard from './ProprietorsSelectCard';

export default function SelectCardsContainer() {
  return (
    <div>
      <ProprietorsSelectCard />
      <RestaurantsSelectCard />
    </div>
  )
}