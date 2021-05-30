import React from 'react';
import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div class={s.profile}>
      <div class={s.description}>
        <img src={avatar} alt={name} class={s.avatar} width="310px" />
        <p class={s.name}>{name}</p>
        <p class={s.tag}>{tag}</p>
        <p class={s.location}>{location}</p>
      </div>

      <ul class={s.stats}>
        <li>
          <span class={s.label}>Followers</span>
          <span class={s.quantity}> {stats.followers}</span>
        </li>
        <li>
          <span class={s.label}>Views</span>
          <span class={s.quantity}> {stats.views}</span>
        </li>
        <li>
          <span class={s.label}>Likes</span>
          <span class={s.quantity}> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};

export default Profile;
