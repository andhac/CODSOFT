import React from 'react';
const comprehensive = require('../../assets/Image/Support.png')
const tick = require('../../assets/Image/check.png')
const exclusive = require('../../assets/Image/area.png')
const headphone = require('../../assets/Image/headphone.png')

const Cards = () => {
    return (
        <>
            <div className="bg-blue-100 py-6 ">
                <div className='  items-center justify-center' >
                    <div className=' my-5  text-center'>
                        <h1 className='text-3xl text-center py-2'>Advantages of Using Three Jobs</h1>
                    </div>
                    <div className='mt-4  container mx-auto gap-2 flex  justify-center '>
                        <div className='w-1/5 bg-white  border-blue-400 border-2 rounded-2xl'>
                            <div className=' p-5 '>
                                <div className='my-3 flex justify-center '>
                                    <img src={tick} className='w-20' alt='tick'/>
                                </div>
                                <div className='text-center'>
                                    <h1 className='text-xl px-2 mb-1'>Trusted Partner Agencies</h1>
                                </div>
                                <div className='text-center'>
                                    <p className='text-gray-500 text-sm'>Unlock your potential with our non-accredited
                                        online courses designed to boost skills and career prospects. Stand out in a
                                        competitive job market or elevate your team's capabilities with these resources.
                                        We
                                        also recommend accredited courses committed to their desired fields.</p>
                                </div>
                                <div className='mt-3  mb-2 text-center'>
                                    <a href='/' className='text-center'>Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/5 bg-white  border-blue-400 border-2 rounded-2xl'>
                            <div className=' p-5 '>
                                <div className='my-3 flex justify-center '>
                                    <img src={exclusive} className='w-20' alt='exclusive'/>
                                </div>
                                <div className='text-center'>
                                    <h1 className='text-xl px-2 mb-1'>Exclusiveness Job Board </h1>
                                </div>
                                <div className='text-center'>
                                    <p className='text-gray-500 text-sm'>Unlock your potential with our non-accredited
                                        online courses designed to boost skills and career prospects. Stand out in a
                                        competitive job market or elevate your team's capabilities with these resources.
                                        We
                                        also recommend accredited courses committed to their desired fields.</p>
                                </div>
                                <div className='mt-3  mb-2 text-center'>
                                    <a href='/' className='text-center'>Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/5 bg-white  border-blue-400 border-2 rounded-2xl'>
                            <div className=' p-5 '>
                                <div className='my-3 flex justify-center '>
                                    <img src={headphone} className='w-20' alt='headPhone'/>
                                </div>
                                <div className='text-center'>
                                    <h1 className='text-xl px-1 mb-1'>Specialist Recruitment Services</h1>
                                </div>
                                <div className='text-center'>
                                    <p className='text-gray-500 text-sm'>Unlock your potential with our non-accredited
                                        online courses designed to boost skills and career prospects. Stand out in a
                                        competitive job market or elevate your team's capabilities with these resources.
                                        We
                                        also recommend accredited courses committed to their desired fields.</p>
                                </div>
                                <div className='mt-3  mb-2 text-center'>
                                    <a href='/' className='text-center'>Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/5 bg-white border-blue-400 border-2 rounded-2xl'>
                            <div className=' p-5 '>
                                <div className='my-3 flex justify-center '>
                                    <img src={comprehensive} className='w-20' alt='compre'/>
                                </div>
                                <div className='text-center'>
                                    <h1 className='text-xl px-0 mb-1'>Comprehensive Online Course</h1>
                                </div>
                                <div className='text-center whitespace-pre-line'>
                                    <p className='text-gray-500 text-sm'>Unlock your potential with our non-accredited
                                        online courses designed to boost skills and career prospects. Stand out in a
                                        competitive job market or elevate your team's capabilities with these resources.
                                        We
                                        also recommend accredited courses committed to their desired fields.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Cards;