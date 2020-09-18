import React, { useState } from 'react';
import style from'../ProfileInfo.module.css';
import { useEffect } from 'react';

const ProfileStatusHook = ({updateStatus, status}) => {
  let [ editMode, setEditMode ] = useState(false);
  let [ statusNew, setStatus] = useState(status);

  useEffect(() => {
    setStatus(status);
  }, [status]);

  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value);
  };
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(statusNew);
  };

  return (
    <div className={style.personalInfo}>
      <span className={style.subtitle}>Status:</span>
      <div className={style.statusPanel}>
        {
          !editMode &&
          <p onDoubleClick={activateEditMode} className={style.status}>{!status ? 'Hi!' : status}</p>
        }
        {
          editMode &&
          <input onBlur={deactivateEditMode} 
                 onChange={onStatusChange} 
                 autoFocus={true}  
                 value={statusNew} 
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