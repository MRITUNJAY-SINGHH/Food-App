/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

const ErrorPage = () => {
   return (
      <div className='min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
         <div className='py-12 px-4 text-center max-w-screen-md mx-auto'>
            <h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl'>
               404
            </h1>
            <p className='mb-4 text-3xl tracking-tight font-bold'>
               Something's missing.
            </p>
            <p className='mb-8 text-lg font-light text-gray-500 dark:text-gray-400'>
               Sorry, we can't find that page. You'll find lots to explore on
               the home page.
            </p>
            <Link
               to='/'
               className='inline-flex text-white bg-[#2563EB] hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4'
            >
               Back to Homepage
            </Link>
         </div>
      </div>
   );
};

export default ErrorPage;
