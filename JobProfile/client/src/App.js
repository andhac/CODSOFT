
import './App.css';

import HomeHoc from "./HOC/Home.HOC";
import HomePage from "./pages/HomePage";
import JobResult from "./components/JobResult";
import {Button} from "antd";
import JobPage from "./components/JobPage/JobPage";
import RegisterHOC from "./HOC/Register.HOC";
import SignUp from "./components/Auth/SignUp";
import {useEffect} from "react";

//Redux
import {useDispatch} from "react-redux";
import {fetchUser} from "./redux/slice/userSlice"
import Cookies from "js-cookie";
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        if(Cookies.get('token')) {
            dispatch(fetchUser())
        }
    }, [dispatch]);

  return (
   <>
    <HomeHoc exact component={HomePage} path="/" className='overflow-y-scroll' />
    <HomeHoc exact component={JobResult} path="/search" />
    <HomeHoc exact component={JobPage} path="/job/:id" />
     <RegisterHOC exact component={SignUp} path='/create-account'/>
   </>
  );
}

export default App;
