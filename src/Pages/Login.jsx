import { useState } from 'react';
import {
   FaFacebook,
   FaTwitter,
   FaGoogle,
   FaEye,
   FaEyeSlash,
} from 'react-icons/fa';

const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [passwordsMatch, setPasswordsMatch] = useState(true);

   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };

   const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
   };

   const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      setPasswordsMatch(e.target.value === confirmPassword);
   };

   const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
      setPasswordsMatch(password === e.target.value);
   };

   return (
      <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
         <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
               Sign in to your account
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600 max-w'>
               Or
               <a
                  href='#'
                  className='font-medium text-blue-600 hover:text-blue-500'
               >
                  create an account
               </a>
            </p>
         </div>

         <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
               <form className='space-y-6' action='#' method='POST'>
                  <div>
                     <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700'
                     >
                        Email address
                     </label>
                     <div className='mt-1'>
                        <input
                           id='email'
                           name='email'
                           type='email'
                           autoComplete='email'
                           required
                           className='appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                           placeholder='Enter your email address'
                        />
                     </div>
                  </div>

                  <div className='mt-1 relative'>
                     <label
                        htmlFor='password'
                        className='block text-sm font-medium text-gray-700'
                     >
                        Password
                     </label>
                     <div className='mt-1 relative'>
                        <input
                           id='password'
                           name='password'
                           autoComplete='new-password'
                           required
                           type={showPassword ? 'text' : 'password'}
                           value={password}
                           onChange={handlePasswordChange}
                           className='appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                           placeholder='Enter your password'
                        />
                        <div className='absolute inset-y-0 right-0 pr-3 flex items-center z-20'>
                           {showPassword ? (
                              <FaEyeSlash
                                 className='h-5 w-5 text-gray-500 cursor-pointer'
                                 onClick={togglePasswordVisibility}
                              />
                           ) : (
                              <FaEye
                                 className='h-5 w-5 text-gray-500 cursor-pointer'
                                 onClick={togglePasswordVisibility}
                              />
                           )}
                        </div>
                     </div>
                  </div>

                  <div className='mt-1 relative'>
                     <label
                        htmlFor='confirm_password'
                        className='block text-sm font-medium text-gray-700'
                     >
                        Confirm Password
                     </label>
                     <div className='mt-1 relative'>
                        <input
                           id='confirm_password'
                           name='confirm_password'
                           autoComplete='new-password'
                           required
                           type={showConfirmPassword ? 'text' : 'password'}
                           value={confirmPassword}
                           onChange={handleConfirmPasswordChange}
                           className='appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                           placeholder='Confirm your password'
                        />
                        <div className='absolute inset-y-0 right-0 pr-3 flex items-center z-20'>
                           {showConfirmPassword ? (
                              <FaEyeSlash
                                 className='h-5 w-5 text-gray-500 cursor-pointer'
                                 onClick={toggleConfirmPasswordVisibility}
                              />
                           ) : (
                              <FaEye
                                 className='h-5 w-5 text-gray-500 cursor-pointer'
                                 onClick={toggleConfirmPasswordVisibility}
                              />
                           )}
                        </div>
                     </div>
                  </div>

                  {!passwordsMatch && (
                     <p className='text-red-500 text-xs'>
                        Passwords do not match
                     </p>
                  )}

                  <div className='flex items-center justify-between'>
                     <div className='flex items-center'>
                        <input
                           id='remember_me'
                           name='remember_me'
                           type='checkbox'
                           className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                        />
                        <label
                           htmlFor='remember_me'
                           className='ml-2 block text-sm text-gray-900'
                        >
                           Remember me
                        </label>
                     </div>

                     <div className='text-sm'>
                        <a
                           href='#'
                           className='font-medium text-blue-600 hover:text-blue-500'
                        >
                           Forgot your password?
                        </a>
                     </div>
                  </div>

                  <div>
                     <button
                        type='submit'
                        className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                     >
                        Sign in
                     </button>
                  </div>
               </form>

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
                     <div>
                        <a
                           href='#'
                           className='w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
                        >
                           <FaFacebook size={20} className='mr-2' />
                        </a>
                     </div>
                     <div>
                        <a
                           href='#'
                           className='w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
                        >
                           <FaTwitter size={20} className='mr-2' />
                        </a>
                     </div>
                     <div>
                        <a
                           href='#'
                           className='w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
                        >
                           <FaGoogle size={20} className='mr-2' />
                        </a>
                     </div>
                  </div>
               </div>

               <div className='py-5'>
                  <div className='grid grid-cols-2 gap-1'>
                     <div className='text-center sm:text-left whitespace-nowrap'>
                        <button className='transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset'>
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              className='w-4 h-4 inline-block align-text-top'
                           >
                              <path
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                                 strokeWidth='2'
                                 d='M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z'
                              />
                           </svg>
                           <span className='inline-block ml-1'>
                              Forgot Password
                           </span>
                        </button>
                     </div>
                     <div className='text-center sm:text-right whitespace-nowrap'>
                        <button className='transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset'>
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              className='w-4 h-4 inline-block align-text-bottom	'
                           >
                              <path
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                                 strokeWidth='2'
                                 d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
                              />
                           </svg>
                           <span className='inline-block ml-1'>Help</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
