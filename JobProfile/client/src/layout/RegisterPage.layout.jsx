import React from 'react';
import RegisterNavbar from "../components/Navbar/RegisterNavbar";

const RegisterPageLayout = ({props, children}) => {
    return (
        <>
            <RegisterNavbar/>
            <div className=' min-h-[100vh]  bg-[#efeff5]'>
                {children}
            </div>
        </>
    );
};

export default RegisterPageLayout;