
import './App.css';

import HomeHoc from "./HOC/Home.HOC";
import HomePage from "./pages/HomePage";
import JobResult from "./components/JobResult";
import {Button} from "antd";
import JobPage from "./components/JobPage/JobPage";

function App() {
  return (
   <>
    <HomeHoc exact component={HomePage} path="/" />
    <HomeHoc exact component={JobResult} path="/search" />
    <HomeHoc exact component={JobPage} path="/job/:jobId" />
   </>
  );
}

export default App;
