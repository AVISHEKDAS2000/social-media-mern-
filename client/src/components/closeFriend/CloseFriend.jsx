import React from 'react';
import "./closeFriend.css";
function CloseFriend({user}) {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
            <li className="sidebarFriend">
                       <img className='sidebarFriendImg' src={PF+user.profilePicture} alt='Dog'/>
                       <span className='sidebarFriendName'>{user.username}</span>
                   </li>
        </div>
    );
}

export default CloseFriend;