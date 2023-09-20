import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/user";

const initialState = {
  login: false,
  user:
    {
      email: "",
      _id: "",
    }
};


const userReducer = createReducer(initialState, (builder) =>{
  return builder
  .addCase( userActions.signUp.fulfilled, ( state, action ) => {
    return {
        ...state,
        user : action.payload.user,
    }
  })
  .addCase(userActions.signIn.fulfilled, (state, action)=>{
    if (action.payload)
      return {user: action.payload.user,
              login: true}
      else return {...state, login: false}
  })
  
  .addCase(userActions.authenticate.fulfilled, (state, action)=>{
    if (action.payload) 
      return {user: action.payload.user,
          login:true}
      else return {...state, login: false}
  })
  .addCase(userActions.signOut.fulfilled, ()=> {
    return initialState
  })
})

export default userReducer;