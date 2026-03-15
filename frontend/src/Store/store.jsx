import { configureStore } from "@reduxjs/toolkit";
import  useReducer from './user.Reducer.jsx'


export const store = configureStore({
    reducer:{
        userReducer:userReducer
    }

})