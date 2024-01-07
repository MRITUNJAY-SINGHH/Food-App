import { Link } from 'react-router-dom';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
   return (
      <>
         <footer className='py-3 dark:bg-gray-900'>
            <div className='container-xxl'>
               <div className='flex justify-evenly items-center '>
                  <div>
                     <h4 className='text-black dark:text-white text-lg mb-4'>
                        Contact Us
                     </h4>
                     <address className='text-black dark:text-white text-sm mb-4'>
                        NH_24 Lal Kuan Ghaziabad
                        <br />
                        PinCodes: 201001
                     </address>
                     <a
                        href='tel:+917065429235'
                        className='text-black dark:text-white block mb-3'
                     >
                        +91 7065429235
                     </a>
                     <a
                        href='mailto:mritunjays447@gmail.com'
                        className='text-black dark:text-white block'
                     >
                        mritunjays447@gmail.com
                     </a>
                     <div className='flex items-center gap-4 mt-4'>
                        <span className='text-black dark:text-white'>
                           Connect With Us
                        </span>
                        <a
                           href='https://www.instagram.com/mritunjay_rajput_'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='text-black dark:text-white'
                        >
                           <FaInstagram size={25} />
                        </a>
                        <a
                           href='https://github.com/MRITUNJAY-SINGHH'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='text-black dark:text-white'
                        >
                           <FaGithub size={25} />
                        </a>
                        <a
                           href='https://www.linkedin.com/in/mritunjay-singh-022333282/'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='text-black dark:text-white'
                        >
                           <FaLinkedin size={25} />
                        </a>
                     </div>
                  </div>
                  <div>
                     <h4 className='text-black dark:text-white text-lg mb-4'>
                        Information
                     </h4>
                     <div className='space-y-2'>
                        <Link
                           to='#'
                           className='text-black dark:text-white block py-2'
                        >
                           Privacy Policy
                        </Link>
                        <Link
                           to='#'
                           className='text-black dark:text-white block py-2'
                        >
                           Refund Policy
                        </Link>

                        <Link
                           to='#'
                           className='text-black dark:text-white block py-2'
                        >
                           Terms & Conditions
                        </Link>
                        <Link
                           to='#'
                           className='text-black dark:text-white block py-2'
                        >
                           Blogs
                        </Link>
                     </div>
                  </div>
                  <div>
                     <h4 className='text-black dark:text-white text-lg mb-4'>
                        Account
                     </h4>
                     <div className='space-y-2'>
                        <Link
                           to='#'
                           className='text-black dark:text-white block py-2'
                        >
                           Search
                        </Link>
                        <Link
                           to='#'
                           className='text-black dark:text-white block py-2'
                        >
                           About Us
                        </Link>
                        <Link
                           to='#'
                           className='text-black dark:text-white block py-2'
                        >
                           Faq
                        </Link>
                        <Link
                           to='/contact-us'
                           className='text-black dark:text-white block py-2'
                        >
                           Contact
                        </Link>
                     </div>
                  </div>
                  <div>
                     <h4 className='text-black dark:text-white text-lg mb-4'>
                        Quick Links
                     </h4>
                     <div className='space-y-2'>
                        <Link
                           to='#'
                           className='text-black dark:text-white block py-2'
                        >
                           Laptops
                        </Link>
                        <Link
                           to='#'
                           className='text-black dark:text-white block py-2'
                        >
                           Headphones
                        </Link>
                        <Link
                           to='#'
                           className='text-black dark:text-white block py-2'
                        >
                           Tablets
                        </Link>
                        <Link
                           to='#'
                           className='text-black dark:text-white block py-2'
                        >
                           Watch
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
         <footer className='py-3 dark:bg-gray-800 '>
            <div className='flex justify-center items-center'>
               <p className='text-black dark:text-white text-center mb-0'>
                  &copy;{new Date().getFullYear()} Powered by Mritunjay Singh
               </p>
            </div>
         </footer>
      </>
   );
};

export default Footer;
