// import PropTypes from 'prop-types';
import './FriendList.css';

export const FriendListItem = ({ friends }) => {
  return (
    <div>
      {friends.map(e => (
        <li class="item" key={e.id}>
          <span class="status"></span>
          <img class="avatar" src={e.avatar} alt="User avatar" width="48" />
          <p class="name">{e.name}</p>
        </li>
      ))}
    </div>
  );
};
