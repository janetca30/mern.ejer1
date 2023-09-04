import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_itineraries = createAsyncThunk ('add_itineraries', async()=>{
  try {
    const itineraries = await axios.get(`http://localhost:4000/api/itineraries`)
      .then((response) => {

        return (response.data.message)

      })
    return {
      itineraries: itineraries
    }
  
  } catch (e){
    console.log(e.message);
  }

})

const filter_itineraries_by_id = createAsyncThunk('filter_itineraries_by_id', async(id)=>{
  try{
    const itinerary = await axios.get(`http://localhost:4000/api/itineraries/`+id)
      .then((response) => response.data.message)

      return {
        itinerary : itinerary
      }

  } catch (e){
    console.log(e.message);
  } 
    
})

const get_itineraries_by_city = createAsyncThunk('get_itineraries_by_city', async (city)=>{
  try{
    const itineraries = await axios.get(`http://localhost:4000/api/itineraries?city=${city}`)
      .then((response) => response.data.message);

      return {
        itineraries : itineraries 
      }

    } catch (e){
      console.log(e.message);
    } 
})
const itinerariesActions = {get_itineraries, filter_itineraries_by_id, get_itineraries_by_city}

export default itinerariesActions;