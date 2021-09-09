import React from 'react';
import add from './images/plus.png'

export const AddChannel = ({ setCreateType, setIsCreating, setIsEditing, type }) => (
    <div
        onClick={() => {
            setCreateType(type);
            setIsCreating((prevState) => !prevState);
            setIsEditing(false);
        }}
    >
        <img src={add} alt="" width='17'/>
    </div>
);