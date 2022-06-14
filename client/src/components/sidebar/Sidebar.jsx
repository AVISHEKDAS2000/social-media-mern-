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
import displayRazorpay from '../../utils/paymentGateway';
export default function Sidebar() {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
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
                        <Link to="/trainyourpet" style={{textDecoration:"none",color:"black"}}>
                           <span className="sidebarListItemText">Train your Pet</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <WorkIcon className="sidebarIcon"/>
                        <button type="button" onClick={displayRazorpay}
                         className="course-payment-button" style={{textDecoration:"none",color:"black",backgroundColor:"slategrey"}}>
                          SAVE THE STRAYS</button>
                        {/* <Link to="/payment" style={{textDecoration:"none",color:"black"}}>
                        <span className="sidebarListItemText">Save the Strays</span>
                        </Link>                         */}
                        
                    </li>
                    <li className="sidebarListItem">
                        <EventSeatIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                   {/* {Users.map(u=>(
                       <CloseFriend key={u.id} user={u}/>
                   ))} */}
                   <li className='sideList'>
                   <Link to={`/profile/oscar`} style={{textDecoration:'none',color:'black',justifyContent:'center'}}>
                     <div className='sideFriendList'>
                     <img 
                         //src="/assets/person/4.jpg"
                      src={PF+"person/oscar2.jpg"}
                      alt="Loading" className="sideFriendImg"/>
                     <div className='nameOfUser'>oscar</div>
                     </div>
                   </Link>
                   </li> 
                   <li className='sideList'>
                   <Link to={`/profile/cosmos`} style={{textDecoration:'none',color:'black',justifyContent:'center'}}>
                     <div className='sideFriendList'>
                     <img 
                         //src="/assets/person/4.jpg"
                      src={PF+"person/cosmos3.jpg"}
                      alt="Loading" className="sideFriendImg"/>
                     <div className='nameOfUser'>cosmos</div>
                     </div>
                   </Link>
                   </li> 
                   <li className='sideList'>
                   <Link to={`/profile/oreo`} style={{textDecoration:'none',color:'black',justifyContent:'center'}}>
                     <div className='sideFriendList'>
                     <img 
                         //src="/assets/person/4.jpg"
                      src={PF+"person/oreo1.jpg"}
                      alt="Loading" className="sideFriendImg"/>
                     <div className='nameOfUser'>oreo</div>
                     </div>
                   </Link>
                   </li> 
                   <li className='sideList'>
                   <Link to={`/profile/rocky`} style={{textDecoration:'none',color:'black',justifyContent:'center'}}>
                     <div className='sideFriendList'>
                     <img 
                         //src="/assets/person/4.jpg"
                      src={PF+"person/rocky1.jpg"}
                      alt="Loading" className="sideFriendImg"/>
                     <div className='nameOfUser'>rocky</div>
                     </div>
                   </Link>
                   </li> 
                   <li className='sideList'>
                   <Link to={`/profile/glacier`} style={{textDecoration:'none',color:'black',justifyContent:'center'}}>
                     <div className='sideFriendList'>
                     <img 
                         //src="/assets/person/4.jpg"
                      src={PF+"person/glacier2.jpg"}
                      alt="Loading" className="sideFriendImg"/>
                     <div className='nameOfUser'>glacier</div>
                     </div>
                   </Link>
                   </li> 
                   <li className='sideList'>
                   <Link to={`/profile/akira`} style={{textDecoration:'none',color:'black',justifyContent:'center'}}>
                     <div className='sideFriendList'>
                     <img 
                         //src="/assets/person/4.jpg"
                      src={PF+"person/akira1.jpg"}
                      alt="Loading" className="sideFriendImg"/>
                     <div className='nameOfUser'>akira</div>
                     </div>
                   </Link>
                   </li> 
                   <li className='sideList'>
                   <Link to={`/profile/malinda`} style={{textDecoration:'none',color:'black',justifyContent:'center'}}>
                     <div className='sideFriendList'>
                     <img 
                         //src="/assets/person/4.jpg"
                      src={PF+"person/malinda3.jpg"}
                      alt="Loading" className="sideFriendImg"/>
                     <div className='nameOfUser'>malinda</div>
                     </div>
                   </Link>
                   </li> 
                </ul>
            </div>
        </div>
    );
}

