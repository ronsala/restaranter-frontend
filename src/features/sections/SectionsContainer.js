import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSections } from './sectionsSlice';
import SectionCard from "./SectionCard";

export const SectionsContainer = (props) => {
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.sections);
  const menuId = parseInt(props.menu.id);
  console.log('menuId in SectionsContainer:', menuId);

  // useEffect(() => {
  //   if (!sections) {
  //     dispatch(fetchSections({restaurantId: props.menu.attributes.restaurant_id, menuId: menuId}))
  //   }
  // }, [dispatch, props.menu.attributes.restaurant_id, menuId])
  useEffect(() => {
    // if (!sections) {
      dispatch(fetchSections({restaurantId: props.menu.attributes.restaurant_id, menuId: menuId}))
    // }
  }, [])

  const sections = Object
  .entries(useSelector((state) => state.sections.entities))
  .flat()
  .filter(element => typeof element === 'object')
  .filter(section => section.attributes.menu_id == props.menu.id);

  const sectionsList = sections?.map((section) => {
    // debugger
    return <SectionCard key={section.id} name={section.attributes.name} id={section.id} />
  })

  switch (status) {
    case 'idle':
      return null;
    case 'loading':
      return (<div>Loading...</div>)
    case 'succeeded':
      return (
        <div>
          { sectionsList }
        </div>
      )
    case 'failed':
      return (<div>{error}</div>)
    default:
      return (<div>Unknown error</div>)
  }
}

export default SectionsContainer;