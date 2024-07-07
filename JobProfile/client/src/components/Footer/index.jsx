import React from 'react';

const Logo = require('../../assets/Image/LOGO.png')
const twitter = require('../../assets/Image/social.png')
const facebook = require('../../assets/Image/facebook.png')
const linkedin = require('../../assets/Image/linkedin.png')
const instagram = require('../../assets/Image/social (1).png')
const youtube = require('../../assets/Image/video.png')

const Footer = () => {
    return (<>
            <div className=' lg:w-full items-center  bg-blue-950 h-92  p-1'>
                <div className='m-20 flex justify-evenly'>
                    <div className=' w-72'>
                        <div className='inline justify-evenly w-full  items-center'>
                            <img src={Logo} alt="Logo" className="inline w-12"/>
                            <h1 className='inline p-4 text-white text-xl'>Three Jobs</h1>
                        </div>
                        <div className='mt-5 '>
                            <p className='text-gray-400 text-sm'>Three Job Is Online Platform dedicated to employing
                                both job seeker and HR professional </p>
                        </div>
                    </div>
                    <div>
                        <div className='w-72'>
                            <div className='text-center '>
                                <a href="/" className="text-gray-400 text-sm p-3"> Find Talent</a>
                                <a href="/" className="text-gray-400 text-sm p-3"> Clients </a>
                                <a href="/" className="text-gray-400 text-sm p-3"> About Us </a>
                                <a href="/" className="text-gray-400 text-sm p-3"> FAQ </a>
                                <a href="/" className="text-gray-400 text-sm p-3"> Blog </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-72'>
                        <div className='mb-3'>
                            <p className='text-gray-400 text-sm'> Newsletters </p>
                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <input type='email' placeholder='Your email here'
                                       className='w-48 h-10 rounded-3xl text-gray-400 text-[14px] pl-4 bg-[#223351]'/>
                            </div>
                            <div>
                                <button className='bg-[#FE6F3D] h-10 w-20 text-white rounded-3xl'>Send</button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className=" mx-12  border-t border-gray-500"></div>
                <div className='my-5 flex justify-evenly '>
                    <div className='text-gray-400 text-sm'>© 2024 Three Jobs. All rights reserved</div>
                    <div className='flex gap-2'>
                        <a href='/' className=''> <img className=' border-white border-2 rounded-full  w-8 h-18' src={instagram} alt='instagram'/></a>
                        <a href='/' className=''> <img className=' border-white border-2 rounded-full  w-8 h-18' src={twitter} alt='twitter' /> </a>
                        <a href='/' className=''> <img className='  w-8 h-18' src={facebook} alt='facebook' /></a>
                        <a href='/' className=''> <img className=' border-white border-2 rounded-full  w-8 h-8' alt='youtube' src={youtube}/> </a>
                        <a href='/' className=''> <img className='  w-8 h-18' src={linkedin} alt='linkedin' /></a>
                    </div>
                    <div className=' flex gap-5 '>
                        <div className='text-gray-400 text-sm'>Privacy Policy</div>
                        <div className='text-gray-400 text-sm'>Terms of Service</div>
                        <div className='text-gray-400 text-sm'>Cookie Policy</div>
                    </div>
                </div>
            </div>
        </>);
};

export default Footer;