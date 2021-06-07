import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchItems } from './itemsSlice';
import ItemsTable from "./ItemsTable";

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

  switch (status) {
    case 'idle':
      return null;
    case 'loading':
      return (<div>Loading...</div>)
    case 'succeeded':
      return (
          <ItemsTable items={items}/>
      )
    case 'failed':
      return (<div>{error}</div>)
    default:
      return (<div>Unknown error</div>)
  }
}

ItemsContainer.propTypes = {
  section: PropTypes.object.isRequired,
  restaurant_id: PropTypes.number.isRequired,
  menu_id: PropTypes.number.isRequired,
};

export default ItemsContainer;