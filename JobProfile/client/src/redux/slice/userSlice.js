import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const fetchUser = createAsyncThunk('user/fetchUser', async (_,thunkAPI) => {
   try{
       const token = Cookies.get('token')
       const response = await axios.get('http://localhost:4000/user',{
           headers:{
               Authorization: `Bearer ${token}`
           }
       });
       return response.data;
   }catch (err){
       return thunkAPI.rejectWithValue(err.response.data)
   }
})

const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null,
        token: Cookies.get('token') || null,
        isAuthenticated: !!Cookies.get('token'),
        status: 'idle',
        error: null
    },
    reducers:{
        logout: (state) => {
            Cookies.remove('token');
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending,(state)=>{
            state.status = 'loading';
        }).addCase(fetchUser.fulfilled,(state,action) => {
            state.status = 'succeeded';
            state.user = action.payload.user;
            state.isAuthenticated = true;
        }).addCase(fetchUser.rejected, (state,action) => {
            state.status = 'failed';
            console.log("Error:" , action.payload);
            state.error = action.payload;
        })
    },
    devTools: true

})

export const {logout} = userSlice.actions;
export default userSlice.reducer