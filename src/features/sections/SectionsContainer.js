import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSections } from './sectionsSlice';
import SectionAccordion from "./SectionAccordion";

export const SectionsContainer = (props) => {
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.sections);
  const menuId = parseInt(props.menu?.id)

  useEffect(() => {
    if (props && props.menu) {
      dispatch(fetchSections({restaurantId: props.menu.attributes.restaurant_id, menuId: menuId}))
    }
  }, [dispatch, props, menuId])

  const sections = Object
  .entries(useSelector((state) => state.sections.entities))
  .flat()
  .filter(element => typeof element === 'object')
  .filter(section => section.attributes.menu_id === menuId);

  const sectionsList = sections.map((section) => {
    return <SectionAccordion key={section.id} name={section.attributes.name} id={section.id} />
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