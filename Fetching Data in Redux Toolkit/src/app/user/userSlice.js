import { createSlice,  createAsyncThunk   } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers= createAsyncThunk("user/fetchUsers", async()=>{
    return axios.get("http://localhost:5000/api/reduxuser")
    .then(res=>res.data);

});


const userSlice= createSlice({
    name:"user",
    initialState:{
        loading:false,
        user:[],
        error:''
    },

    /// reducer call here
    extraReducers:builder=>{
        builder.addCase(fetchUsers.pending, state=>{
            state.loading= true
        });

        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.loading=false
            state.user= action.payload
            state.error=''
        });
        builder.addCase(fetchUsers.rejected,(state, action)=>{
           state.loading= false
           state.user=[]
           state.error= action.error.message
        });
    }



    /// end reduce
    
})
  export default userSlice.reducer; 