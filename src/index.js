import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile, Statistics, FriendList } from './components';
import './index.css';
import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import friends from 'components/FriendList/friends.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" data={data} />
    <FriendList friends={friends} />
  </React.StrictMode>
);
