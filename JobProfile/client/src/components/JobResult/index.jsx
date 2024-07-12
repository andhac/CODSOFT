import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {FaStar} from "react-icons/fa";
import {GrLocation} from "react-icons/gr";
import {IoBagOutline} from "react-icons/io5";
import {LiaRupeeSignSolid} from "react-icons/lia";
import {MdOutlineDescription} from "react-icons/md";

//Redux
import {useDispatch, useSelector} from "react-redux";
import {fetchJobs} from "../../redux/slice/jobSlice";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const JobResult = () => {
    const query = useQuery();
    const searchQuery = query.get('q').toLowerCase();
    console.log(searchQuery);
    const dispatch = useDispatch();
    const {jobs, status, error} = useSelector(( state ) => state.jobs)
    // const filterJob = jobs.filter(job => job.title.toLowerCase().includes(searchQuery));
    const [currentPage, setCurrentPage] = useState(1);
    const jobPerPage = 10;

    useEffect(() => {
        if (searchQuery) {
            dispatch(fetchJobs(searchQuery))
        }
    }, [searchQuery, dispatch]);

    const filterJob = jobs.filter(job => job.title.toLowerCase().includes(searchQuery));
console.log("Jobs Detail:", jobs)
    //Calculating the index of the last job
    const indexOfLastJob = currentPage * jobPerPage;
    const indexOfFirstJob = indexOfLastJob - jobPerPage;
    const currentJob = filterJob.slice(indexOfFirstJob, indexOfLastJob);

    //Calculate the total number of pages
    const totalPage = Math.ceil(filterJob.length / jobPerPage);

    //Navigation for next Page
    const nextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1)
        }
    }

    //Navigation for previous Page
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <>

            <div className='text-center py-10   '>
                Showing {indexOfFirstJob + 1} to {indexOfLastJob > filterJob.length ? filterJob.length : indexOfLastJob} of {filterJob.length} jobs
            </div>
            {filterJob.length === 0 ? (
               <div className='w-full flex justify-center' >
                    <div className='container max-w-2xl'>
                        <div className=' my-2 bg-white p-6 border border-gray-100 shadow-lg rounded-3xl ' >
                            <div className='flex items-center justify-center ' >
                                <img src='https://static.naukimg.com/s/9/121/_next/static/media/zeroJobs-found.72c8c9ae.png' alt='No Jobs Found' className='w-60' />
                            </div>
                            <div className='mt-10'>
                                <h1 className=' text-xl text-center mb-2 ' >No Result Found </h1>
                                <p className='text-center font-sans text-slate-400' > Modify Search Criteria  </p>
                            </div>
                        </div>
                    </div>
               </div>
            ) : (
                currentJob.map(( job ) =>
                    <Link to={`/job/${job._id}`}
                          key={job.id} className='w-full flex justify-center'>
                        <div  className='w-full max-w-2xl '>
                            <div
                                className='bg-white p-6 my-4 rounded-2xl transition duration-500 ease-in-out hover:shadow-2xl border border-gray-200'>
                                <div className="w-full relative">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="text-xl font-semibold text-black">{job.title}</div>
                                        <div className="text-sm text-gray-500 flex items-center">
                                            {job.company.name}
                                            <FaStar className='mx-1 text-yellow-400 w-4 h-4'/>
                                            <span className='text-gray-600'>4.3 | 1.5km</span>
                                        </div>
                                    </div>
                                    <div className="text-gray-600 text-sm flex items-center mb-4">
                                        <IoBagOutline className="mr-2 w-5 h-5"/>
                                        <span className="mr-2">{job.experience}</span>
                                        <span className="text-gray-400">|</span>
                                        <LiaRupeeSignSolid className="ml-2 mr-1 w-5 h-5"/>
                                        <span className="mr-2">{job.salary}</span>
                                        <span className="text-gray-400">|</span>
                                        <GrLocation className="ml-2 mr-1 w-5 h-5"/>
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="text-gray-700 mb-4">
                                        <MdOutlineDescription className="inline mr-2 w-5 h-5"/>
                                        <span>{job.shortDescription}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {["HTML", "CSS", "JavaScript", "React", "Node"].map(( skill, index ) => (
                                            <span key={index}
                                                  className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )

            )}
            <div className='flex justify-center my-6'>
                <button onClick={prevPage}
                        className='px-4 py-2 mx-2 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed '
                        disabled={currentPage === 1}>
                    Previous
                </button>
                <div
                    className='text-white bg-gray-700 rounded-lg mx-2  hover:bg-gray-900 flex items-center px-3 '> {currentPage} of {totalPage} </div>
                <button onClick={nextPage}
                        className='px-4 py-2 mx-2 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed '
                        disabled={currentPage === totalPage}>
                    Next
                </button>

            </div>
        </>
    )
        ;
};

export default JobResult;
