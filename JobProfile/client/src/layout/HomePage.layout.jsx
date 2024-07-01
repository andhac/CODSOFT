import React from 'react';
import Navbar from "../components/Navbar";

const HomePageLayout = ({props, children}) => {
    return (
        <>
            <Navbar/>
            <div
                className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div
                    className=" bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
                    {children}
                </div>
            </div>
            {/*<div*/}
            {/*    className="inset-0 top-0 z-[-2] min-h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">*/}
            {/*    {children}*/}
            {/*</div>*/}
            {/*<div className=" inset-0*/}
            {/*-z-10 h-full w-full px-5 py-24*/}
            {/*[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">*/}
            {/*    {children}*/}
            {/*</div>*/}
        </>
    );
};

export default HomePageLayout;