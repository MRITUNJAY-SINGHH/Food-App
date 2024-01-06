/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdKey } from 'react-icons/io';

const ForgotPasswordPage = () => {
   const [email, setEmail] = useState('');

   const handleChange = (e) => {
      setEmail(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // Add logic to handle the submission of the email for password reset
      console.log(`Reset password email sent to: ${email}`);
   };

   return (
      <div className='flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900'>
         {/* Header */}
         <div className='flex items-center mb-4'>
            <IoMdKey className='text-4xl text-blue-700 mr-2' />
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
               Forgot your password?
            </h2>
         </div>
         {/* Card */}
         <div className='w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800'>
            <p className='text-sm text-gray-700 dark:text-gray-300'>
               Don't fret! Just type in your email, and we will send you a code
               to reset your password.
            </p>
            <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
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
                     value={email}
                     onChange={handleChange}
                     className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                     placeholder='name@email.com'
                     required
                  />
               </div>
               <button
                  type='submit'
                  className='w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
               >
                  Send Reset Code
               </button>
            </form>
            <div className='mt-6'>
               <div className='relative'>
                  <div className='absolute inset-0 flex items-center'>
                     <div className='w-full border-t border-gray-300'></div>
                  </div>
                  <div className='relative flex justify-center text-md'>
                     <span className='px-2 bg-gray-100 text-gray-500'>
                        Remember your password?{' '}
                        <Link
                           to='/login'
                           className='text-blue-700 bold hover:underline dark:text-black-500'
                        >
                           Login
                        </Link>
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ForgotPasswordPage;
