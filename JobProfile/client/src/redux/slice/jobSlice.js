import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async( title, thunkAPI) => {
    try{
        const response = await axios.get(`http://localhost:4000/job?title=${title}`);
        return response.data;
    }catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
})

export const fetchJobByLocation = createAsyncThunk('jobs/fetchJobByLocation', async ( location, thunkAPI ) => {
    try {
        const response = await axios.get(`http://localhost:4000/job/loc/${location}`);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
})

export const fetchJobById = createAsyncThunk('jobs/fetchJobById', async(id, thunkAPI) => {
    try{
        const response = await axios.get(`http://localhost:4000/job/${id}`);
        return response.data;
    }catch (err){
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

const jobSlice = createSlice({
    name:'jobs',
    initialState:{
        jobs:[],
        job: null,
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
            .addCase(fetchJobById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchJobById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.job = action.payload;
            }).addCase(fetchJobById.rejected, (state, action) => {
            state.status = 'failed';
            console.log("Error of Job", action.payload);
            state.error = action.payload;
            })
            .addCase(fetchJobByLocation.pending, ( state ) => {
                state.status = 'loading';
            })
            .addCase(fetchJobByLocation.fulfilled, ( state, action ) => {
                state.status = 'succeeded';
                state.jobs = action.payload;
            })
            .addCase(fetchJobByLocation.rejected, ( state, action ) => {
                state.status = 'failed';
                console.log("Error of Job", action.payload);
                state.error = action.payload;
            })
    },
    devTools: true
})

export default jobSlice.reducer;