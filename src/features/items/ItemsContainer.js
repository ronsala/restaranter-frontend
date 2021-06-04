import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from './itemsSlice';
import ItemCard from "./ItemCard";

export const ItemsContainer = (props) => {
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.items);
  const sectionId = parseInt(props.section?.id)

  useEffect(() => {
    if (props && props.section) {
      dispatch(fetchItems({restaurantId: props.restaurant_id, menuId: props.menu_id, sectionId: sectionId}))
    }
  }, [dispatch, props, sectionId])

  const items = Object
  .entries(useSelector((state) => state.items.entities))
  .flat()
  .filter(element => typeof element === 'object')
  .filter(item => item.attributes.section_id === sectionId);

  const itemsList = items.map((item) => {
    return <ItemCard key={item.id} name={item.attributes.name} price={item.attributes.price} desc={item.attributes.desc} id={item.id} />
  })

  switch (status) {
    case 'idle':
      return null;
    case 'loading':
      return (<div>Loading...</div>)
    case 'succeeded':
      return (
        <div>
          { itemsList }
        </div>
      )
    case 'failed':
      return (<div>{error}</div>)
    default:
      return (<div>Unknown error</div>)
  }
}

export default ItemsContainer;