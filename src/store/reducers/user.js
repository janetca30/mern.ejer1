import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/user";

const initialState = {
  token: false,
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
              token: action.payload.token}
      else return {...state, token: false}
  })
  
  .addCase(userActions.authenticate.fulfilled, (state, action)=>{
    if (action.payload) 
      return {user: action.payload.user,
          token:action.payload.token}
      else return {...state, token: false}
  })
  .addCase(userActions.signOut.fulfilled, ()=> {
    return initialState
  })
})

export default userReducer;