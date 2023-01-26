import React, { useState, useEffect, FC, ChangeEvent } from "react";


type ProfileStatusWithHooksType = {
  status: string,
  updateUserStatus: (status: string) => void,
}
const ProfileStatusWithHooks: FC<ProfileStatusWithHooksType> = ({ status, updateUserStatus }) => {

  const [editMode, setEditMode] = useState(false);
  const [currentStatus, setStatus] = useState(status);

  useEffect(() => {
    setStatus(status)
  }, [status]);

  const activateMod = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateUserStatus(currentStatus);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {!editMode &&
        <div>
          <b><span onDoubleClick={activateMod}>{currentStatus || "No status here!"}</span> </b>
        </div>
      }
      {editMode && (
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={currentStatus} />
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
