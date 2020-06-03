import React,  { useState, useEffect } from "react";

const ProfileStatusWithHooks = (props) => {

    let [ editMode, setEditMode]= useState(false);
    let [ status, setStatus]= useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] );

    const activateMod = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

	return (
		<>
			{ !editMode &&
				<div>
					<span  onDoubleClick={activateMod}>{props.status || "No status here!"}</span>
				</div>
			}
			{editMode && (
				<div>
					<input  onChange={onStatusChange} autoFocus={true}  onBlur={ deactivateEditMode} value={status} />
				</div>
			)}
		</>
	);
};

export default ProfileStatusWithHooks;
