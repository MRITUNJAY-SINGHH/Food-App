/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import banner from '../../assets/banner-9.png';
// import icon1 from '../../assets/icon-1.png';
// import icon2 from '../../assets/icon-2.png';
// import icon3 from '../../assets/icon-3.png';
// import icon4 from '../../assets/icon-4.png';
// import icon5 from '../../assets/icon-5.svg';
import './Footer.css';
import { FaEnvelope } from 'react-icons/fa6';

const Footer = () => {
   return (
      <>
         <footer className='py-3 dark:bg-gray-900'>
            <div className='relative newsletter-inner flex justify-between items-center mb-10'>
               <div className='ml-16'>
                  <div className='flex flex-col'>
                     <h2 className='text-[#253D4E] dark:text-white text-[45px] mb-4 font-bold'>
                        Stay home & get your daily
                     </h2>

                     <h2 className='text-[#253D4E] dark:text-white text-[45px] mb-4  font-bold'>
                        needs from our shop
                     </h2>
                  </div>

                  <div>
                     <h3 className='text-[#7E7E7E] text-[22px] font-normal '>
                        Start You'r Daily Shopping with{' '}
                        <span className='text-[#29A56C]'>Our Mart</span>
                     </h3>
                  </div>
                  <div className='flex items-center gap-5 mt-10 outline-none border-none'>
                     <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Subscribe for latest updates'
                        className='px-8 py-3 rounded-[25px] border-2 border-gray-300 focus:outline-none focus:border-indigo-500 dark:text-black dark:placeholder:text-black'
                     />
                     <button className='flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-[25px] hover:bg-indigo-700 transition-colors duration-200'>
                        <FaEnvelope />
                        Subscribe
                     </button>
                  </div>
               </div>
               <div className='banner-9'>
                  <img src={banner} alt='' />
               </div>
            </div>
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
