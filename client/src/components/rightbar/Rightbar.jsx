import React from 'react';
import "./rightbar.css";
import { Users } from '../../dummyData';
import Online  from "../online/Online.jsx";
import Profile from '../profile/Profile';
import { useEffect,useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Rightbar({user}) {
 const PF=process.env.REACT_APP_PUBLIC_FOLDER;
 const [friends,setFriends] = useState([]);
 const { user:currentUser,dispatch} = useContext(AuthContext);
 const [followed, setFollowed] = useState(currentUser.followings.includes(user?._id));
 //const [followed, setFollowed] = useState(currentUser.followings.includes(user._id));
 
 

useEffect(()=>{
    const getFriends=async()=>{
        try{
            const friendList=await axios.get(`/users/friends/`+user._id);
            setFriends(friendList.data);
        }
        catch(err){
           console.log(err);
        }
    }
    getFriends();
},[user]);


const handleClick=async()=>{
    try{
       if(followed){
           await axios.put(`/users/${user._id}/unfollow`,{userId:currentUser._id,});
           dispatch({type:"UNFOLLOW",payload:user._id});
       }
         
       else{
           await axios.put(`/users/${user._id}/follow`,{userId:currentUser._id,});
           dispatch({type:"FOLLOW",payload:user._id});
       }
    }
    catch(err){
       console.log(err);
    }
    setFollowed(!followed)
};

 const HomeRightBar=()=>{
     return(
         <>
             {/* <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt=""/>
                    <span className="birthdayText">
                       <b>Vinicius Jr.</b> and <b>3 other friends</b> have birthdays today
                    </span>
                </div> */}
                {/* <img className="rightbarAd" src="/assets/ad2.jpg" alt=""/> */}
                {/* <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul> */}
         </>
     )
 }
 
 const ProfileRightBar=()=>{
     return(
         <div>
          {user.username !== currentUser.username && (
              <button className="rightbarFollowButton" onClick={handleClick}>
                {followed ? "Unfollow" : "Follow"}
                {followed ? <RemoveIcon /> : <AddIcon />}
              </button>
          )}
           <h2 className='userInfo'>User Information</h2>
           <div className="rightbarInfo">
               <div className="rightbarInfoItem">
                   <span className='rightbarInfoKey'>Pet Category:</span>
                   <span className='rightbarInfoValue'>{user.petCategory || 'Not Specified'}</span>
               </div>
               <div className="rightbarInfoItem">
                   <span className='rightbarInfoKey'>Breed:</span>
                   <span className='rightbarInfoValue'>{user.breed || 'Not Specified'}</span>
               </div>
               <div className="rightbarInfoItem">
                   <span className='rightbarInfoKey'>Age:</span>
                   <span className='rightbarInfoValue'>{user.age || 'Not Specified'}</span>
               </div>
           </div>
           <h4 className='rightbarTitle'>User Friends</h4>
           <div className="rightbarFollowings">
               {
                   friends.map((friend)=>(
               <Link key={friend._id} to={"/profile/"+friend.username} style={{textDecoration:"none",color:"black"}}>
                     <div className="rightbarFollowing">
                    <img src={friend.profilePicture ? PF+friend.profilePicture 
                    : PF+"person/noAvatar.png"} 
                    alt="" className="rightbarFollowingImg" />
                    <span className='rightbarFollowingName'>{friend.username}</span>
                  </div>
               </Link>
                 
               ))
               }
              
                {/* <div className="rightbarFollowing">
                   <img src={`${PF}person/2.jpg`} alt="" className="rightbarFollowingImg" />
                   <span className='rightbarFollowingName'>Mark Zouma</span>
               </div>
               <div className="rightbarFollowing">
                   <img src={`${PF}person/3.jpg`} alt="" className="rightbarFollowingImg" />
                   <span className='rightbarFollowingName'>Mark Zouma</span>
               </div>
               <div className="rightbarFollowing">
                   <img src={`${PF}person/4.jpg`} alt="" className="rightbarFollowingImg" />
                   <span className='rightbarFollowingName'>Mark Zouma</span>
               </div>
               <div className="rightbarFollowing">
                   <img src={`${PF}person/5.jpg`} alt="" className="rightbarFollowingImg" />
                   <span className='rightbarFollowingName'>Mark Zouma</span>
               </div>
               <div className="rightbarFollowing">
                   <img src={`${PF}person/6.jpg`} alt="" className="rightbarFollowingImg" />
                   <span className='rightbarFollowingName'>Mark Zouma</span>
               </div>  */}
           </div>
         </div>  
     )
 }
 
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    );
}