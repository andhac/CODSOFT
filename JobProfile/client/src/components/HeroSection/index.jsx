import React from 'react';

function Hero(props) {
    return (
        <>
            <section className="flex flex-col items-center justify-center text-center p-12 bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">Recruitments With Implementation</h1>
                <p className="text-gray-600 mb-8">
                    Talent Sourcer is a cutting-edge online platform that empowers both job seekers and
                    professionals to navigate the dynamic world of careers and talent acquisition.
                </p>
                <div className="flex mb-8">
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l">Find Job</button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r">Find Talents</button>
                </div>
                <div className="flex space-x-2 mb-8">
                    <input type="text" placeholder="Search for job..."
                           className="px-4 py-2 border border-gray-300 rounded-l w-full"/>
                    <input type="text" placeholder="Job Type" className="px-4 py-2 border border-gray-300 w-full"/>
                    <input type="text" placeholder="Department"
                           className="px-4 py-2 border border-gray-300 rounded-r w-full"/>
                    <button className="px-6 py-2 bg-black text-white rounded">Search</button>
                </div>
            </section>
        </>
    );
}

export default Hero;