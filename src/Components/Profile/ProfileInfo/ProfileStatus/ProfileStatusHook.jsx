import React, { useState } from 'react';
import style from'../ProfileInfo.module.css';
import { useEffect } from 'react';

const ProfileStatusHook = (props) => {
  let [ editMode, setEditMode ] = useState(false);
  let [ status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value);
  };
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  return (
    <div className={style.personalInfo}>
      <span className={style.subtitle}>Status:</span>
      <div className={style.statusPanel}>
        {
          !editMode &&
          <p onDoubleClick={activateEditMode} className={style.status}>{!props.status ? 'Hi!' : props.status}</p>
        }
        {
          editMode &&
          <input onBlur={deactivateEditMode} 
                 onChange={onStatusChange} 
                 autoFocus={true}  
                 value={status} 
                 type="text" 
                 name="status"
                 autoComplete="off" 
                 className={style.input}/>
        }
      </div>
    </div>
  )
};

export default ProfileStatusHook;