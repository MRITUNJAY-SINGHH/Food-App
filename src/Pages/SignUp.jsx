import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoMdEyeOff } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';
import google from '../assets/google.svg';
import github from '../assets/GitHub-Logo.wine.svg';
import facebook from '../assets/Facebook-f_Logo-Blue-Logo.wine.svg';

const SignUpPage = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };

   const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
   };

   return (
      <div className='flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900'>
         {/* Header */}
         <div className='flex items-center mb-4'>
            <RiLockPasswordFill className='text-4xl text-blue-700 mr-2' />
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
               Sign Up
            </h2>
         </div>
         {/* Card */}
         <div className='w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800'>
            <form className='mt-8 space-y-6' action='#'>
               <div className='grid grid-cols-2 gap-4'>
                  <div>
                     <label
                        htmlFor='firstName'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                     >
                        First Name
                     </label>
                     <input
                        type='text'
                        name='firstName'
                        id='firstName'
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='firstName'
                        required
                     />
                  </div>
                  <div>
                     <label
                        htmlFor='lastName'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                     >
                        Last Name
                     </label>
                     <input
                        type='text'
                        name='lastName'
                        id='lastName'
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='lastName'
                        required
                     />
                  </div>
               </div>
               <div>
                  <label
                     htmlFor='email'
                     className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                     Your email
                  </label>
                  <input
                     type='email'
                     name='email'
                     id='email'
                     className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                     placeholder='@email.com'
                     required
                  />
               </div>
               <div>
                  <label
                     htmlFor='password'
                     className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                     Your password
                  </label>
                  <div className='relative'>
                     <input
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        id='password'
                        placeholder='••••••••'
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        required
                     />
                     <button
                        type='button'
                        className='absolute inset-y-0 right-0 pr-3 flex items-center'
                        onClick={togglePasswordVisibility}
                     >
                        {showConfirmPassword ? (
                           <IoMdEyeOff size={20} />
                        ) : (
                           <IoEye size={20} />
                        )}
                     </button>
                  </div>
               </div>
               <div>
                  <label
                     htmlFor='confirmPassword'
                     className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                     Confirm password
                  </label>
                  <div className='relative'>
                     <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name='confirmPassword'
                        id='confirmPassword'
                        placeholder='••••••••'
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        required
                     />
                     <button
                        type='button'
                        className='absolute inset-y-0 right-0 pr-3 flex items-center'
                        onClick={toggleConfirmPasswordVisibility}
                     >
                        {showConfirmPassword ? (
                           <IoMdEyeOff size={20} />
                        ) : (
                           <IoEye size={20} />
                        )}
                     </button>
                  </div>
               </div>
               <div className='flex items-start space-x-4'>
                  <div className='flex items-center h-5'>
                     <input
                        id='agree'
                        aria-describedby='agree'
                        name='agree'
                        type='checkbox'
                        className='w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600'
                        required
                     />
                  </div>
                  <div className='text-sm flex-grow'>
                     <label
                        htmlFor='agree'
                        className='font-medium text-gray-900 dark:text-white'
                     >
                        I agree to the terms and conditions
                     </label>
                  </div>
               </div>
               <button
                  type='submit'
                  className='w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
               >
                  Create your account
               </button>
               <div className='mt-6'>
                  <div className='relative'>
                     <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-gray-300'></div>
                     </div>
                     <div className='relative flex justify-center text-sm'>
                        <span className='px-2 bg-gray-100 text-gray-500'>
                           Or continue with
                        </span>
                     </div>
                  </div>

                  <div className='mt-6 grid grid-cols-3 gap-3'>
                     <Link
                        to='#'
                        className='w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
                     >
                        <img src={facebook} alt='facebook' className='mr-2' />
                     </Link>
                     <Link
                        to='#'
                        className='w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
                     >
                        <img src={github} alt='github' className='mr-2' />
                     </Link>
                     <Link
                        to='#'
                        className='w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
                     >
                        <img src={google} alt='google' className='mr-2' />
                     </Link>
                  </div>
               </div>

               <div className='flex items-center justify-between mt-6'>
                  <div className='text-sm'>
                     <Link
                        to='/login'
                        className='font-medium text-blue-600 hover:text-blue-500'
                     >
                        Already have an account? Login
                     </Link>
                  </div>
                  <div className='text-sm'>
                     <Link
                        to='#'
                        className='font-medium text-red-600 hover:text-red-500'
                     >
                        Help
                     </Link>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default SignUpPage;
