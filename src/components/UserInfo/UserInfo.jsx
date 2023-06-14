import React from 'react';
import './UserInfo.scss';

function UserInfo({ name }) {
  return (
    <div className="userInfo">
      <h1>
        {' '}
        Bonjour <span className="userName"> {name} </span>
      </h1>
      <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
    </div>
  );
}

export default UserInfo;