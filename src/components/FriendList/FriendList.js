import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.scss';
import FriendListItem from '../FriendListItem/FriendLIstItem';

function FriendList({ friends }) {
  return (
    <ul className={s.friendlist}>
      {friends.map(friend => (
        <FriendListItem props={friend} key={friend.id} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendList;
