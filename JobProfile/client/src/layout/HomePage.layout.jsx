import React from 'react';
import Navbar from "../components/Navbar";

const HomePageLayout = ({props, children}) => {
    return (
        <>
            <Navbar/>
            <div className=' min-h-[100vh]  bg-[#efeff5]'>
                {children}
            </div>
        </>
    );
};

export default HomePageLayout;