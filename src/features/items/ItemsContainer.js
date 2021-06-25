import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes, { array } from 'prop-types';
import { useHistory } from 'react-router-dom';
import ItemsTable from './ItemsTable';
import { deleteItem } from './itemsSlice'

export const ItemsContainer = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const menuId = props.menu_id
  const restaurantId = props.restaurant_id
  const sectionId = parseInt(props.section?.id)

  const handleEditButtonClick = (itemId) => { 
    history.push(`/restaurants/${restaurantId}/menus/${menuId}/sections/${sectionId}/items/${itemId}/edit`)
  }

  const handleDeleteButtonClick = (itemId) => {
    alert('Item Deleted')
    dispatch(deleteItem(itemId))
    history.push(`/restaurants/${restaurantId}`);
  }

  const { status, error } = useSelector(state => state.items);


  let items = Object
  .entries(useSelector((state) => state.items.entities))
  .flat()
  .filter(element => typeof element === 'object')
  .filter(item => item.attributes.section_id === sectionId);

  // Sort the items by name.
  items.sort((a, b) => {
    if (Object.values(a.attributes)[0] < Object.values(b.attributes)[0]) {
      return -1;
    } else {
      return 1;
    }
  })

  switch (status) {
    case 'idle':
      return null;
    case 'loading':
      return (<div>Loading...</div>)
    case 'succeeded':
      return (
        <ItemsTable handleDeleteButtonClick={handleDeleteButtonClick} handleEditButtonClick={handleEditButtonClick} items={items} live={props.live} />
      )
    case 'failed':
      return (<div>{error}</div>)
    default:
      return (<div>Unknown error</div>)
  }
}

ItemsContainer.propTypes = {
  items: array,
  live: PropTypes.bool, 
  menu_id: PropTypes.number.isRequired,
  restaurant_id: PropTypes.number.isRequired,
  section: PropTypes.object.isRequired,
};

export default ItemsContainer;