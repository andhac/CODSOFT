import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {FaStar} from "react-icons/fa";
import {GrLocation} from "react-icons/gr";
import {IoBagOutline} from "react-icons/io5";
import {LiaRupeeSignSolid} from "react-icons/lia";
import {MdOutlineDescription} from "react-icons/md";
import jobs from "../../assets/rawData/MOCK_DATA (1).json"

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const JobResult = () => {
    const query = useQuery();
    const searchQuery = query.get('q').toLowerCase();
    console.log(searchQuery);
    const filterJob = jobs.filter(job => job.title.toLowerCase().includes(searchQuery));

    return (
        <>
            {filterJob.length === 0 ? (
                <div className='w-full h-full text-xl'>NO JOb Found</div>
            ) : (
                filterJob.map(( job ) =>
            <Link to={`/job/${job.id}`} className='w-full flex  justify-center items-center'>
                <div className='bg-white p-4 my-6 mx-10 rounded-2xl transition duration-700 ease-in-out hover:shadow-xl'>
                    <div className="w-[700px] relative">
                        <div className="w-full">
                            <div className="flex text-black ">
                                {job.title}
                            </div>
                            <div className="text-[#474d6a]  text-sm ">
                                {job.company} <FaStar  className='mx-1 mb-1 text-yellow-400 inline w-3 h-3' /><span className='text-[#717b9e]'>4.3 <span className="text-gray-300">|</span> 1.5km </span>
                            </div>
                            <div className="pt-4 text-gray-600">
                                <IoBagOutline className="inline items-center justify-center pb-1 w-6 h-6"/>
                                <span className="px-2 text-sm">{job.experience}</span>
                                <span className="text-gray-300">|</span>
                                <LiaRupeeSignSolid className=" pl-2 inline items-center justify-center pb-1 w-6 h-6"/>
                                <span className="pl-1 pr-2 text-sm">Not Disclose</span>
                                <span className="text-gray-300">|</span>
                                <GrLocation className=" pl-2 inline items-center justify-center pb-1 w-6 h-6"/>
                                <span className="pl-1 text-sm">{job.location}</span>
                            </div>
                            <div className="pt-2 text-gray-600 line-clamp-1 overflow-ellipsis">
                                <MdOutlineDescription className="inline items-center justify-center pb-1 w-6 h-6"/>
                                <span className="pl-2 text-sm font-thin  ">{job.description}</span>
                            </div>
                            <div className="py-2 text-gray-400">
                                <ul className="flex space-x-2">
                                    <li className=" rounded-full px-2 text-sm">HTML</li>
                                    <li className=" rounded-full px-2 text-sm">CSS</li>
                                    <li className=" rounded-full px-2 text-sm">JavaScript</li>
                                    <li className=" rounded-full px-2 text-sm">React</li>
                                    <li className=" rounded-full px-2 text-sm">Node</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
                )
            )}
        </>
    );
};

export default JobResult;