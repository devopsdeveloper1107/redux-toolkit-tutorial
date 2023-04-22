import { createSlice } from "@reduxjs/toolkit";

const userSlice= createSlice({
    name:"user",
    initialState:{
        loading:false,
        user:[],
        error:''
    }

    /// reducer call here
})
  export default userSlice.reducer; 