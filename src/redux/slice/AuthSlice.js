


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    email:null,
    useName: null,
    userID:null
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SET_ACTIVE_USER: (state, action)=>{
            console.log(action.payload);
            const { email, userName, userID} = action.payload;
            state.isLoggedIn = true;
            state.email=action.payload.email;
            state.useName=action.payload.useName;
            state.userID=action.payload.userID;
        },
        REMOVE_ACTIVE_USER:( state, action ) => {
            state.isLoggedIn = false;
            state.email= null ;
            state.useName= null ;
            state.userID= null ;

        }
    }
});

export const {SET_ACTIVE_USER, REMOVE_ACTIVE_USER} = AuthSlice.actions;

export const selectIsLoggedIn = (state)=> state.auth.isLoggedIn;
export const selectEmail = (state)=>state.auth.email;
export const selectUseName = (state)=> state.auth.useName;
export const selectUserID = (state)=>state.auth.userID;

export default AuthSlice.reducer;