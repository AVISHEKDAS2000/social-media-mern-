import {createContext,useReducer,useEffect}  from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE={
    //user:null,
    //{
        
    //     _id:"62971285b93c5e8c9f0e0a54",
    //     username:"shawn",
    //     email:"shawn123@gmail.com",
    //     password:"$2b$10$xWOiTj8S5bjPiVJ7AzKs6./iKabi8y96rTEs8Uv.jf6afawdsJLl6",
    //     profilePicture:"",
    //     coverPicture:"",
    //    followers:Array,
    //    followings:Array,
    //     isAdmin:false
        //createdAt:2022-06-01T07:17:25.964+00:00,
        //updatedAt:2022-06-01T07:17:25.964+00:00,
        user:JSON.parse(localStorage.getItem("user")) || null,
        // isFetching: false,
        // error: false,
        
    //},
    isFetching:false,
    error:false,
};

export const AuthContext =createContext(INITIAL_STATE);

export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(AuthReducer,INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
      },[state.user])
      


    return (
        <AuthContext.Provider value={{user:state.user,
        isFetching:state.isFetching,
        error:state.error,
        dispatch}}
        >
            {children}
        </AuthContext.Provider>
    )
}