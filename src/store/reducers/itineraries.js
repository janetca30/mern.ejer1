import { createReducer } from "@reduxjs/toolkit";
import itinerariesActions from "../actions/itineraries";

const initialState ={
  itineraries: [
    {
      name: '',
      photo: '',
      author: '',
      price: 0,
      duration: 0,
      hashtags: [],
      comments: [],
    }
  ]
}
const itinerariesReducer = createReducer(initialState, (builder)=>{
  return builder
    .addCase(itinerariesActions.get_itineraries.fulfilled, (state, action)=>{
      const newState ={
        ...state,
        itineraries:action.payload.itineraries}
        return newState
    })

    .addCase(itinerariesActions.filter_itineraries_by_id.fulfilled, (state, action)=>{
      const newState = {
        ...state,
        itineraries: [action.payload.itinerary]}
        return newState
    })

    .addCase(itinerariesActions.get_itineraries_by_city.fulfilled, (state, action)=>{
      const newState ={
        ...state,
        itineraries: action.payload.itineraries}
        return newState
    })
    
  })

  export default itinerariesReducer