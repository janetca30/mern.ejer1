import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/user";

const initialState = {
  token: null,
  user:
    {
      email: "",
      _id: "",
    }
};


const userReducer = createReducer(initialState, (builder) =>{
  return builder
  .addCase( userActions.signUp.fulfilled, ( stateNow, action ) => {
    return {
        ...stateNow,
        user : action.payload.user,
        
    }
} )
  .addCase(userActions.signIn.fulfilled, (state, action)=>{
      return {user: action.payload.user,
              token: action.payload.token}
  })
  
  .addCase(userActions.authenticate.fulfilled, (state, action)=>{
    return {user: action.payload.user,
          token:action.payload.token}
  })
  .addCase(userActions.signOut.fulfilled, (state, action)=> {
    return initialState
  })
})

export default userReducer;