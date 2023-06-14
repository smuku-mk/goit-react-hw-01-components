// import PropTypes from 'prop-types';
import './FriendList.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ id, avatar, name, isOnline }) => {
  return (
    <ul class="friend-list">
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    </ul>
  );
};
