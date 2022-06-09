import React from 'react';
import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import {Users} from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';
import { Link } from 'react-router-dom';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <OndemandVideoIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupsIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Train your Pet</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkIcon className="sidebarIcon"/>
                        <Link to="/payment">
                        <span className="sidebarListItemText">Save the Strays</span>
                        </Link>                        
                        
                    </li>
                    <li className="sidebarListItem">
                        <EventSeatIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                   {Users.map(u=>(
                       <CloseFriend key={u.id} user={u}/>
                   ))}
                </ul>
            </div>
        </div>
    );
}

