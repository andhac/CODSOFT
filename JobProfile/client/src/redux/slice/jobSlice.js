import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async( title, thunkAPI) => {
    try{
        const response = await axios.get(`http://localhost:4000/job?title=${title}`)
        return response.data;
    }catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
})

const jobSlice = createSlice({
    name:'jobs',
    initialState:{
        jobs:[],
        status: 'idle',
        error: null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchJobs.pending,(state) => {
            state.status = 'loading';
        })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.status = 'failed';
                console.log("Error of Job", action.payload);
                state.error = action.payload;
            })
    }
})

export default jobSlice.reducer;