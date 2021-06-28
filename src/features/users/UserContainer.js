import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { 
  fetchUser, 
  selectUserById
} from './usersSlice';
import { User } from "./User";

export const UserContainer = ({match}) => {
  let { userId } = match.params

  const dispatch = useDispatch();

  let user = useSelector(state => selectUserById(state, userId));
  
  let { status, error } = useSelector(state => state.users);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser(userId))
    }
  }, [dispatch, user, userId])

  switch (status) {
    case 'idle':
      return null;
    case 'succeeded':
      return (
        <div>
          <User user={user} />
        </div>
      )
    case 'loading':
      return (<div>Loading...</div>)
    case 'failed':
      return (<div>{error}</div>)
    default:
      return (<div>Unknown error</div>)
  }
}

UserContainer.propTypes = {
  match: PropTypes.object.isRequired,
}

export default UserContainer;