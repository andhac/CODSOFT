import React, {useState} from 'react';
import * as Yup from 'yup'
import {getDownloadURL, ref, storage, uploadBytes} from "../../config/firebase";
import {FaAsterisk, FaCheckCircle, FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import classNames from "classnames";

const SignUp = () => {
    const validationSchema = Yup.object().shape({
        userName: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email').required('email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        name: Yup.string().required('Name is required'),
        contactNumber: Yup.string().matches(/^[0-9]{10}$/, 'Contact number must be exactly 10 digits').required('Contact number is required'),
        resume: Yup.mixed().required('Resume is required')
    })

    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        userName: "", email: "", password: "", role: 'job-seeker', name: "", contactNumber: "", resume: null
    });
    const [isPasswordEmpty, setIsPasswordEmpty] = useState('');
    const [uploading, setUploading] = useState(false);
    const handleChange = ( e ) => {
        setUserData(( prev ) => ({...prev, [e.target.id]: e.target.value}))
        if (e.target.id === 'password') {
            setIsPasswordEmpty(e.target.value)
        }
    }

    const handleFileChange = ( e ) => {
        setUserData(( prev ) => ({...prev, resume: e.target.files[0]}))
    }

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        setErrors({});
        try {
            await validationSchema.validate(userData, {abortEarly: false})

            setUploading(true);

            if (userData.resume) {
                const storageRef = ref(storage, `resumes/${Date.now().toString()}_${userData.resume.name}`);
                try {
                    await uploadBytes(storageRef, userData.resume);
                    const url = await getDownloadURL(storageRef);
                    setUserData(( prev ) => ({...prev, resume: url}));
                    console.log('Uploaded file URL:', url);
                } catch (err) {
                    console.log(err);
                }
                setUploading(false);
            }
        } catch (err) {
            if (err.inner) {
                const validateError = {};
                err.inner.forEach(error => {
                    validateError[error.path] = error.message;
                })
                setErrors(validateError)
            }
        }
        console.log(userData);
    }

    const cartoon = require('../../assets/Image/cartoon.jpg')

    const [showPassword, setShowPassword] = useState(false);


    return (<>
        <div className='container p-10 '>
            <div className='flex justify-around gap-4 w-full my-3 '>
                <div>
                    <div className='w-80 border border-gray-100 bg-white rounded-xl fixed '>

                        <div className='flex justify-center items-center'>

                            <img src={cartoon} alt='carton' className=' w-24 my-10  rounded-full '/>
                        </div>
                        <h2 className='text-center text-lg my-6 '> On registering, you can</h2>
                        <ul className='text-slate-600 text-md font-sans m-4 relative pl-5 '>
                            <li className=' my-4 '>
                                <i className='absolute top-1 left-0 text-green-500'>
                                    <FaCheckCircle/>
                                </i>
                                <p className=''>
                                    Build your profile and let recruiters find you
                                </p>
                            </li>
                            <li className=''>
                                <i className='absolute top-[68px]  left-0 text-green-500'>
                                    <FaCheckCircle/>
                                </i>
                                <p>
                                    Find a job and grow your career
                                </p>
                            </li>
                            <li className='my-4'>
                                <i className='absolute top-28  left-0 text-green-500'>
                                    <FaCheckCircle/>
                                </i>
                                <p>
                                    Streamlined Application Process for Success
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='  font-sans border border-gray-100 bg-white rounded-xl p-10 '>
                    <h1 className='text-xl font-semibold  font-sans '>
                        Create your Three Jobs profile
                    </h1>
                    <div className='mt-2 py-1'>
                        <form onSubmit={handleSubmit} className=' flex flex-col gap-1 my-7 ' noValidate >
                            <label className='font-semibold flex'>
                                Username <FaAsterisk className='w-[6px] text-red-500'/>
                            </label>
                            <input
                                type="text"
                                name="userName"
                                placeholder="Create your unique Username"
                                id='userName'
                                value={userData.userName}
                                onChange={handleChange}
                                required
                                className='border border-slate-200 rounded-2xl w-[568px] p-3 focus:outline-none focus:border-blue-500 transition duration-300'
                            />
                            {errors.userName && <p className='text-red-500 text-sm'>{errors.userName}</p>}
                            <label className=' font-semibold mt-4 flex '>
                                Email ID <FaAsterisk className=' w-[6px] text-red-500'/>
                            </label>
                            <input type="email" name="email" placeholder="Tell us your Email ID" id='email'
                                   value={userData.email}
                                   className={classNames(' border  rounded-2xl w-[568px] p-3 focus:outline-none focus:border-blue-500 transition duration-300 ',{
                                        'border-red-500': errors.email
                                   })}
                                   onChange={handleChange}
                                   />
                            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                            <label className=' flex font-semibold mt-4 '>
                                Password <FaAsterisk className=' w-[6px] text-red-500'/>
                            </label>
                            <div className='relative'>

                                <input type={showPassword ? 'text' : 'password'} name="password"
                                       placeholder="(Minimum 6 characters)"
                                       id='password' value={userData.password}
                                       className=' border border-slate-200 rounded-2xl w-[568px] p-3 focus:outline-none focus:border-blue-500 transition duration-300 '
                                       onChange={handleChange} />
                                {isPasswordEmpty && (
                                    <button type='button' onClick={() => setShowPassword(!showPassword)}
                                            className='absolute right-3 top-1/3 transform -translate-y-1/2  '>
                                        {showPassword ? <FaRegEye className='w-12'/> :
                                            <FaRegEyeSlash className='w-12'/>}
                                    </button>)}
                                {errors.password ? <p className='text-red-500 text-sm'>{errors.password}</p> :
                                    <p className='text-slate-400 text-sm '> This helps your account stay protected </p>}
                            </div>
                            <label className='font-semibold mt-4 flex '>
                                Full name <FaAsterisk className=' w-[6px] text-red-500'/>
                            </label>
                            <input type="text" name="name" placeholder="what is your name?" id='name'
                                   value={userData.name}
                                   className=' border border-slate-200 rounded-2xl w-[568px] p-3 focus:outline-none focus:border-blue-500 transition duration-300 '
                                   onChange={handleChange}
                                   />
                            {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                            <label className='font-semibold mt-4 flex '>
                                Contact Number <FaAsterisk className=' w-[6px] text-red-500'/>
                            </label>
                            <div className='relative'>
                                <span className='absolute left-2 top-1/2 transform -translate-y-1/2 '>+91</span>
                                <input maxLength='10' minLength='10' pattern='\d{10}' type='tel'
                                       name="contactNumber" placeholder="Enter your contact number"
                                       id='contactNumber'
                                       value={userData.contactNumber}
                                       className=' border border-slate-200 rounded-2xl w-[568px] p-3 pl-9 no-spinner focus:outline-none focus:border-blue-500 transition duration-300  '
                                       onChange={handleChange}
                                       />
                                {errors.contactNumber && <p className='text-red-500 text-sm'>{errors.contactNumber}</p>}
                            </div>
                            <div className="flex items-center mt-2">
                                <label
                                    htmlFor="resume"
                                    className="bg-red-500 text-white rounded-full py-2 px-4 cursor-pointer hover:bg-red-600 transition duration-300"
                                >
                                    Upload Resume
                                </label>
                                <input
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    className='hidden'
                                    onChange={handleFileChange}

                                />
                                <span className="ml-2 text-gray-500 text-sm">DOC, DOCX, PDF, RTF | Max: 2 MB</span>
                            </div>
                            {userData.resume && (<span className="ml-2 text-green-500 text-sm" >File uploaded: {userData.resume.name}</span>) }
                                {errors.resume && <p className='text-red-500 text-sm'>{errors.resume}</p>}
                            <button
                                type="submit"
                                className="bg-blue-500 text-white rounded-full py-2 px-4 mt-4 hover:bg-blue-600 transition duration-300"
                                disabled={uploading}
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default SignUp;