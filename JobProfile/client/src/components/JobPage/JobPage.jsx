import React from 'react';
import {useParams} from "react-router-dom";
import {FaStar} from "react-icons/fa";
import {IoBagOutline} from "react-icons/io5";
import {LiaRupeeSignSolid} from "react-icons/lia";
import {GrLocation} from "react-icons/gr";
import jobs from "../../assets/rawData/MOCK_DATA.json"
const JobPage = ( {isLoggedIn, education} ) => {
    const {jobId} = useParams();
    const job = jobs.find((job) => job.id === parseInt(jobId))
    if (!job) {
        return <div>Job not found</div>
    }

    const postingDate = '2024-05-24';
    const calculateDate = ( date ) => {
        const postedDate = new Date(date);
        const currentDate = new Date();
        const differInTime = currentDate.getTime() - postedDate.getTime();
        const differInDays = Math.ceil(differInTime / (1000 * 3600 * 24));
        return differInDays;
    }
    const daysAgo = calculateDate(postingDate)

    return (
        <>
            <div className='pt-20'>
                <div className=' flex justify-center'>
                    <div className=' w-full max-w-3xl'>
                        <div
                            className='bg-white p-6 my-2 rounded-2xl shadow-lg border border-gray-200'>
                            <div className="w-full relative">
                                <div className=" mb-2">
                                    <div className="text-lg font-thin">{job.title}</div>
                                    <div className="font-[400] font-sans text-gray-700 flex items-center mb-3">
                                        {job.company}
                                        <FaStar className='ml-3  text-yellow-400 w-4 h-4'/>
                                        <span className=' mx-2 text-gray-600'>4.3 | 1.5km</span>
                                    </div>
                                </div>
                                <div className="text-gray-600 text-sm font-sans flex items-center mb-4">
                                    <IoBagOutline className="mr-2 w-5 h-5"/>
                                    <span className="mr-2">{job.experience}</span>
                                    <span className="text-gray-400">|</span>
                                    <LiaRupeeSignSolid className="ml-2 mr-1 w-5 h-5"/>
                                    <span className="mr-2">{job.salary}</span>
                                    <span className="text-gray-400">|</span>
                                    <GrLocation className="ml-2 mr-1 w-5 h-5"/>
                                    <span>{job.location}</span>
                                </div>
                                <div className='border-b mb-2'></div>
                                <div className='flex items-center gap-3 container'>
                                    <div className=' flex text-gray-600 font-sans items-center '>
                                        <div className='font-sans'>
                                            Posted: <span
                                            className='text-black font-semibold text-md'>{daysAgo} days ago</span> <span
                                            className="text-gray-400  ">|</span> Openings: <span
                                            className='text-black font-semibold text-md '>{job.opening}</span> <span
                                            className="text-gray-400  ">|</span> Applicants: <span
                                            className='text-black font-semibold text-md '>{job.application}</span>
                                        </div>
                                        <div className='items-center  flex'>
                                            {isLoggedIn ? (
                                                <button
                                                    className='text-white bg-blue-600 hover:bg-blue-400 font-bold px-4 py-2 rounded-lg'>Apply</button>
                                            ) : (
                                                <>


                                                    <button
                                                        className=' hover:bg-slate-100 text-blue-500 font-semibold border-blue-500 border-2 px-4 py-2 rounded-3xl mx-3 '>Register
                                                        to Apply
                                                    </button>
                                                    <button
                                                        className=' bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-3xl '>Login
                                                        to apply
                                                    </button>
                                                </>
                                            )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className=' w-full max-w-3xl bg-white rounded-2xl p-6 my-4 border border-gray-200 shadow-lg '>
                        <div>
                            <div className='my-2.5'>
                                <h2>Job Description</h2>
                            </div>

                            <div>
                                <ul className='text-gray-800 list-disc font-sans ml-7 mr-3 '>
                                    {job.description.map((item,index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='my-3 '>
                                <div className='my-1 font-sans font-semibold'>Role: <span
                                    className='text-gray-800 font-[400] '> {job.role} </span></div>
                                <div className='my-1 font-sans font-semibold'>Industry type: <span
                                    className='text-gray-800 font-[400] '> {job.industry} </span></div>
                                <div className='my-1 font-sans font-semibold'>Department: <span
                                    className='text-gray-800 font-[400] '>{job.department}</span></div>
                                <div className='my-1 font-sans font-semibold'>Employment Type: <span
                                    className='text-gray-800 font-[400] '>{job.employmentType}</span></div>
                            </div>

                            <div className='my-3' >
                                <div className='font-sans font-semibold ' >Education</div>
                                {job.education.map((edu, index) => (
                                    <div key={index}>
                                        {edu.UG && (
                                            <div className='font-sans font-semibold'>UG: <span className='text-gray-800 font-[400]'>{edu.UG}</span></div>
                                        )}
                                        {edu.PG && (
                                            <div className='font-sans font-semibold'>PG: <span className='text-gray-800 font-[400]'>{edu.PG}</span></div>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobPage;