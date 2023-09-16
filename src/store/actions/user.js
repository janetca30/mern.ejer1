import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const signIn = createAsyncThunk('signIn', async (payload) => {
  try{
      let {email, password} = payload;
    
    const response = await axios
    .post('http://localhost:4000/api/user/signIn', {
      email: email,
      password : password,
    });
    if (response.data.user) {
      localStorage.setItem('token', response.data.token);
      console.log('Successfully logged in');
      return {
        user: response.data.user,
      };
    } else {
      throw new Error("User not found"); 
    }
  } catch(error) {
      error.response.data.message.forEach((message) => console.log(message))
    }
  });

const signUp = createAsyncThunk('signUp', async (payload) => {
  try{
       
    const response = await axios
    .post('http://localhost:4000/api/user/signUp', payload);
      
      localStorage.setItem('token', response.data.token);
      console.log('Successfully registered');
      return response.data.user
    }
    catch(error) {
      error.response.data.message.forEach((message) => console.log(message))
    }      
    
});

const authenticate = createAsyncThunk("authenticate", async()=>{

  try {
    let token = localStorage.getItem("token");
      
    let user = await axios.post ('http://localhost:4000/api/user/authenticated', null, {
  
      headers:{
        'Authorization':'Bearer ' + token
      }
    })
    .then((response)=>{
    
      console.log("authenticated successfully");
      localStorage.setItem("token", response.data.token);
      return response.data.user;
    })
    return {
      user : user
    }
  } catch (error) {
    console.log(error.message);
    
  }
});

const signOut = createAsyncThunk("signOut", async ()=>{
  try {
      await axios
      .post('http://localhost:4000/api/user/signOut')
      .then(localStorage.removeItem("token"))
      .then(console.log('Successfully signed out'))
        
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});

const userActions = { signIn, authenticate, signOut, signUp }

export default userActions