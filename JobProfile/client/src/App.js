
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import HomePageLayout from "./layout/HomePage.layout";
import HomeHoc from "./HOC/Home.HOC";
import HomePage from "./pages/HomePage";
import JobResult from "./components/JobResult";

function App() {
  return (
   <>
    <HomeHoc exact component={HomePage} path="/" />
    <HomeHoc exact component={JobResult} path="/search" />
   </>
  );
}

export default App;
