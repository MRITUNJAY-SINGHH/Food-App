import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdKey } from 'react-icons/io';

const ChangePassword = () => {
   const [newPassword, setNewPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const handleResetPassword = () => {
      // Add your logic for resetting the password here
      // This could involve making an API request to your backend
      // to update the user's password.
      console.log('Password reset logic goes here');
   };

   return (
      <div className='flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900'>
         {/* Header */}
         <div className='flex items-center mb-4'>
            <IoMdKey className='text-4xl text-blue-700 mr-2' />
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
               Change Your Password
            </h2>
         </div>
         {/* Card */}
         <div className='w-full max-w-md p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800'>
            <form className='mt-8 space-y-6' onSubmit={handleResetPassword}>
               <div>
                  <label
                     htmlFor='newPassword'
                     className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                     New Password
                  </label>
                  <input
                     type='password'
                     name='newPassword'
                     id='newPassword'
                     value={newPassword}
                     onChange={(e) => setNewPassword(e.target.value)}
                     className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                     placeholder='Enter your new password'
                     required
                  />
               </div>
               <div>
                  <label
                     htmlFor='confirmPassword'
                     className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                     Confirm Password
                  </label>
                  <input
                     type='password'
                     name='confirmPassword'
                     id='confirmPassword'
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                     className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                     placeholder='Confirm your new password'
                     required
                  />
               </div>
               <button
                  type='submit'
                  className='w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
               >
                  Reset Password
               </button>
               <div className='flex items-center justify-center mt-4'>
                  <Link
                     to='/login'
                     className='text-blue-600 hover:text-blue-500 font-medium text-sm border-b border-blue-500 dark:border-blue-400 dark:text-blue-300 dark:hover:text-blue-400'
                  >
                     Back to Login
                  </Link>
               </div>
            </form>
         </div>
      </div>
   );
};

export default ChangePassword;
