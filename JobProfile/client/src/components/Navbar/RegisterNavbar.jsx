import React from 'react';
import {useNavigate} from "react-router-dom";
const logo = require('../../assets/Image/LOGO.png')

const RegisterNavbar = () => {
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/')
    }

    return (
        <>
            <div className='lg:inline container mx-auto items-center' >
                <nav className='bg-white flex items-center justify-around gap-3 p-4  w-full' >
                    <div className='items-center flex hover:cursor-pointer gap-4 ' onClick={redirect} >
                        <img src={logo} alt='Logo'  className='w-20' />
                        <h1 className='text-xl' >Three Jobs</h1>
                    </div>
                <div className='flex' >
                    <h1 className='text-md'>
                        Already have an account ? <a href='/signin' className='text-blue-500 ml-3' >Sign In</a>
                    </h1>
                </div>
                </nav>
            </div>
        </>
    );
};

export default RegisterNavbar;