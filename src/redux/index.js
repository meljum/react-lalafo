import { combineReducers, configureStore, createSlice} from "@reduxjs/toolkit";
import {authSliceReducer} from "./authSlice"
import { housesSliceReduser } from "./housesSlice";

 const reducers = combineReducers({
  auth: authSliceReducer,
  houses: housesSliceReduser,
})

export const store = configureStore({
    reducer: reducers
})

store.subscribe(() => {
  const auth = store.getState().auth 
  localStorage.setItem("auth", JSON.stringify(auth))
  console.log(auth);
 
})
    
 console.log(store); 