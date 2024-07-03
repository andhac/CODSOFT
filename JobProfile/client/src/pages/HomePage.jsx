import React from 'react';
import Hero from "../components/HeroSection";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div>
            <Hero/>
            <Cards/>
            <Footer/>
        </div>
    );
};

export default HomePage;