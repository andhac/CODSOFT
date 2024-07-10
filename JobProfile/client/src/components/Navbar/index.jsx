import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {RxHamburgerMenu} from "react-icons/rx"
import {FaUserCircle} from "react-icons/fa"
import logo from "../../assets/Image/LOGO.png";
import SignIn from "../Auth/SignIn";
function Navbar() {
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/')
    }
    const navigateToCreateUser = () =>{
        navigate('/create-account')
    }
    const logo = require('../../assets/Image/LOGO.png')
    const[user, setUser] = useState({
    })
    const [isSignInOpen, setIsSignInOpen] = useState(false);

    return (
        <>
            <div className='lg:inline container mx-auto items-center  '>
                <nav className=" sticky top-0  z-10 flex bg-white w-full items-center justify-around  gap-4 p-4 h-full ">
                    <div className="items-center flex hover:cursor-pointer " onClick={redirect} >
                        <img src={logo} alt="Logo" className="w-20"/>
                        <a href="/" className=" text-xl text-gray-950 p-3">Three Jobs</a>
                    </div>
                    <div>
                        <a href="/" className="text-gray-950 p-4 transition-all delay-150 hover:text-xl">Home</a>
                        <a href="/" className="text-gray-950 p-4 transition-all delay-150 hover:text-xl">Browser
                            job </a>
                        <div className="group inline-block relative">
                            <a href="/profile"
                               className="text-gray-950 p-4 transition-all delay-150 hover:text-xl ">Companies</a>
                            <div
                                className="  absolute mt-2 w-48 rounded-md shadow-xl py-1 bg-white text-black z-10 invisible group-hover:visible">
                                <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-100">Company 1</a>
                                <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-100">Company 2</a>
                                <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-100">Company 3</a>
                            </div>
                        </div>
                        {user?.userName ? (
                            <div className="inline-block ">
                                <div
                                    className="flex bg-transparent border-2 hover:bg-white h-10 transition ease-out delay-150 hover:-translate-y-1 hover:scale-110   text-gray-950 hover:text-black py-2 px-4 rounded-3xl w-24">
                                    <RxHamburgerMenu className='h-full font-bold text-5xl '/>
                                    <FaUserCircle className=' h-full font-bold text-5xl '/>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="inline-block relative mx-3">
                                    <button
                                        onClick={() => setIsSignInOpen(true)}
                                        className="bg-transparent border-2 hover:bg-white h-10   text-gray-950 hover:text-black py-2 px-4 rounded-3xl w-24">
                                        Log In
                                    </button>
                                </div>
                                <div className="inline-block relative">
                                    <button onClick={navigateToCreateUser}
                                        className="bg-transparent border-2 hover:bg-white h-10   text-gray-950 hover:text-black py-2 px-4 rounded-3xl w-24">
                                        Sign Up
                                    </button>
                                </div>
                                <SignIn isOpen={isSignInOpen} setIsOpen={setIsSignInOpen}/>
                            </>

                        )}

                    </div>
                </nav>
            </div>

        </>
    );
}

export default Navbar;