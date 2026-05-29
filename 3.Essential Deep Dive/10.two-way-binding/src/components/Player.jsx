import { useState } from 'react';

export default function Player({ initialName , symbol }){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditable, setIsEditable] = useState(false);
    function handleEditClick(){
        setIsEditable((editing) => !editing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }


    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if(isEditable){
        editablePlayerName = (
            <input type="text" required value={playerName} onChange={handleChange} />
        );
    }
return (

    <li>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">
                {symbol}
            </span>
        </span>
        <button onClick={handleEditClick}>{isEditable ? 'Save' : 'Edit'}</button>
    </li>
);
}