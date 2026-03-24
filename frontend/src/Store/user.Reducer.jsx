// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     isAuthenticate: false

// }

// const userSlice = createSlice({

//     name:"user",
//     initialState,
//     reducers:{
//         addUser:(state)=> {
//             state.isAuthenticate = true
//         }, 
//            removeUser:(state,action)=> {
//             state.isAuthenticate = false
//     }
// }
// })

//  export default userSlice.reducer;
//  export const {addUser, removeUser} = userSlice.actions

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isAuthenticated: false
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state) => {
      state.isAuthenticated = true
    },
    removeUser: (state) => {
      state.isAuthenticated = false
    }
  }
})

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions


