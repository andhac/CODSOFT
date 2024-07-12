import {configureStore} from '@reduxjs/toolkit'

//REDUCERS
import authReducer from "./slice/authSlice";
import userReducer from "./slice/userSlice";
import jobReducer from './slice/jobSlice';


const store = configureStore({
    reducer:{
        auth: authReducer,
        user: userReducer,
        jobs: jobReducer,

    }
})
export default store;