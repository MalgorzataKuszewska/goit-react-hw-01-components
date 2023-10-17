import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className="status">{isOnline ? 'online' : 'offline'}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map((friend, index) => (
        <FriendListItem
          key={index}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
