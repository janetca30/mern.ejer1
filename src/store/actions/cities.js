import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_cities = createAsyncThunk('add_cities', async()=>{
  try {
    const cities =  await axios.get(`http://localhost:4000/api/cities`)
      .then((response) => {
          
        return (response.data.message)

      })
    return {
      cities: cities
    }

  } catch (e){
    console.log(e.message);
  } 
    
})

const filter_cities_by_id = createAsyncThunk('filter_cities_by_id', async(id)=>{
  try{
    const city = await axios.get(`http://localhost:4000/api/cities/`+id)
      .then((response) => response.data.message)

      return {
        city : city
      }

  } catch (e){
    console.log(e.message);
  } 
    
})

const citiesActions = {get_cities, filter_cities_by_id}

export default citiesActions;