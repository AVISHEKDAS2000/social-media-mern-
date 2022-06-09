export const LoginStart=(userCredentials)=>({
    type:"LOGIN_START",
});
export const LoginSuccess=(user)=>({
    type:"LOGIN_SUCCESS",
    payload:user,
});
export const LoginFailure=(user)=>({
    type:"LOGIN_FAILURE",
    //Change according to github
    payload:error
});

export const Follow=(userId)=>({
    type:"FOLLOW",
    payload:userId,

}); 
export const Unfollow=(userId)=>({
    type:"UNFOLLOW",
    payload:userId,

}); 