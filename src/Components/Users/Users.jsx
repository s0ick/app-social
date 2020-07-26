import React from 'react';
import style from './Users.module.css';

const User = (props) => {
  return (
    <div>
      <span>
        <div>
          <img src={props.photo_url}/>
        </div>
        <div>
          <button>Follow</button>
        </div>
      </span>
      <span>
        <span>
          <div>props.fullName</div>
          <div>props.status</div>
        </span>
        <span>
          <div>props.county</div>
          <div>props.city</div>
        </span>
      </span>
    </div>
  );
};

const Users = (props) => {

  let UserElem = props.users
      .map(u => <User key={u.id} 
                      photo_url={u.photo_url}
                      fullName={u.fullName}
                      status={u.status}
                      country={u.location.county}
                      city={u.location.city}
  />);

  return (
    <div>
      {UserElem}
    </div>
  );
}
export default Users;