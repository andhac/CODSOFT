import React, {useState} from 'react';
import classNames from "classnames";
import {useNavigate} from "react-router-dom";
import {GrLocation} from "react-icons/gr";
import {HiOutlineOfficeBuilding} from "react-icons/hi"

function Hero() {
    const photo = require('../../assets/Image/job.jpg')
    const [search, setSearch] = useState('')
    const [isSearchEmpty, setIsSearchEmpty] = useState(false);
    const navigate = useNavigate();
    const handleSearch = ( e ) => {
        e.preventDefault()
        if (!search.trim()) {
            setIsSearchEmpty(true)
            return
        }

        navigate(`/search?q=${search}`)
    }

    const handleReset = () => {
        setSearch('')
        setIsSearchEmpty(false)
    }
    const handleChange = ( e ) => {
        setSearch(e.target.value);
        if (isSearchEmpty) setIsSearchEmpty(false) // Reset border color when user is start typing
    }
    console.log(isSearchEmpty)

    return (
        <>
            <div
                className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div
                    className=" bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
                    <div className="flex lg:w-full items-center mx-auto container ">
                        <section className="flex flex-col items-center p-12 bg-transparent">
                            <h1 className="text-7xl text-gray-950 font-bold mb-4">Recruitments With Implementation</h1>
                            <p className="text-gray-600 mb-8">
                                Talent Sourcer is a cutting-edge online platform that empowers both job seekers and
                                professionals to navigate the dynamic world of careers and talent acquisition.
                            </p>
                            <div className="flex space-x-3 mb-8">
                                <form onSubmit={handleSearch} className="form relative">
                        <span className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                            <svg
                                width="17"
                                height="16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-labelledby="search"
                                className="w-5 h-5 text-gray-700"
                            >
                                <path
                                    d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                                    stroke="currentColor"
                                    stroke-width="1.333"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </svg>
                        </span>
                                    <input
                                        className={classNames("w-52 input rounded-full px-8 py-3 border-2  focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md", {
                                            "border-transparent": !isSearchEmpty,
                                            "border-red-500": isSearchEmpty,
                                            "bg-red-100": isSearchEmpty,
                                        })}
                                        placeholder="Search for job.."
                                        required=""
                                        type="text"
                                        value={search}
                                        onChange={handleChange}
                                    />
                                    {search && (
                                        <button onClick={handleReset} type="reset"
                                                className="absolute right-3 -translate-y-1/2 top-1/2 p-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-gray-700"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                ></path>
                                            </svg>
                                        </button>
                                    )}
                                </form>

                                {/*<input type="text" placeholder="Search for job..."*/}
                                {/*       className="w-52 input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"/>*/}
                                <form onSubmit={handleSearch} className="form relative">
                                    <GrLocation
                                        className='absolute left-2 -translate-y-1/2 top-1/2 p-1 w-7 h-7 text-gray-700 '/>
                                    <input type="text" placeholder="Job Type"
                                           className="w-44 input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"/>
                                </form>
                                <form className="form relative">
                                    <HiOutlineOfficeBuilding
                                        className='absolute left-2 -translate-y-1/2 top-1/2 p-1 w-7 h-7 text-gray-700 '/>
                                    <input type="text" placeholder="Department"
                                           className="w-44 input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"/>
                                </form>
                                <button type='submit'
                                        className="ml-1 w-40 px-6 py-2 bg-[#479ced] text-white rounded-full   active:bg-blue-700 transition-all duration-300 shadow-xl">Search
                                </button>
                            </div>
                        </section>
                        <div className=' my-5'>
                            <img src={photo} className="h-full w-full lg:w-[650px] rounded-3xl" alt='Alter'/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Hero;