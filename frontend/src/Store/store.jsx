// import { configureStore } from "@reduxjs/toolkit";
// import  useReducer from './user.Reducer.jsx'


// export const store = configureStore({
//     reducer:{
//         userReducer:userReducer
//     }

// })
import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user.Reducer"

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export default store
