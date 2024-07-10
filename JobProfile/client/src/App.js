
import './App.css';

import HomeHoc from "./HOC/Home.HOC";
import HomePage from "./pages/HomePage";
import JobResult from "./components/JobResult";
import {Button} from "antd";
import JobPage from "./components/JobPage/JobPage";
import RegisterHOC from "./HOC/Register.HOC";
import SignUp from "./components/Auth/SignUp";

function App() {
  return (
   <>
    <HomeHoc exact component={HomePage} path="/" className='overflow-y-scroll' />
    <HomeHoc exact component={JobResult} path="/search" />
    <HomeHoc exact component={JobPage} path="/job/:jobId" />
     <RegisterHOC exact component={SignUp} path='/create-account'/>
   </>
  );
}

export default App;
