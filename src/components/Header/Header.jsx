import { FaSearch } from 'react-icons/fa';
import Logo from '../../assets/logo.svg';
import { IoGitCompare } from 'react-icons/io5';
import { FaCartArrowDown } from 'react-icons/fa';
import { MdFavoriteBorder } from 'react-icons/md';
import './Header.css';
import AutocompleteComponents from '../../Common/Autocomplete';
import DarkNightMode from '../../Common/DarkNightMode';
import DropdownMenu from '../../Common/DropdownUser';
import Navbar from './Navbar/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <>
         <div className='header flex justify-between items-center mx-2 my-4 pt-[20px] pb-[30px]'>
            <div className='logo flex justify-center items-center w-[9%]'>
               <Link to='/'>
                  <img src={Logo} alt='logo' className='h-11' />
               </Link>
            </div>
            <div className='Search  h-11 flex items-center w-[45%] mx-5 my-autocomplete'>
               <AutocompleteComponents />

               <input
                  id='search-input'
                  type='text'
                  placeholder='Search for food items, e.g., apples, bread, milk...'
                  className='outline-none flex-1 dark:bg-gray-900 dark:text-white text-red placeholder-black dark:placeholder-black'
               />

               <div className='search-icon cursor-pointer dark:text-white'>
                  <FaSearch />
               </div>
            </div>

            <div className='options w-[35%] flex justify-around items-center'>
               <div className='flex items-center justify-center'>
                  <div className='flex justify-center items-center space-x-2 relative cursor-pointer'>
                     <IoGitCompare className='h-7 w-7' />
                     <span className='text-sm font-semibold dark:text-white text-black'>
                        Compare
                     </span>
                     <span className='absolute top-[-20px] left-2 bg-[#29a56c] dark:bg-white text-white dark:text-black rounded-full h-7 w-7 flex items-center justify-center text-xs font-bold'>
                        6
                     </span>
                  </div>
               </div>

               <div className='flex items-center justify-center'>
                  <div className='flex justify-center items-center space-x-2 relative cursor-pointer'>
                     <MdFavoriteBorder className='h-7 w-7' />
                     <span className='text-sm font-semibold dark:text-white text-black'>
                        Wishlist
                     </span>
                     <span className='absolute top-[-20px] left-0 bg-[#29a56c] dark:bg-white text-white dark:text-black rounded-full h-7 w-7 flex items-center justify-center text-xs font-bold'>
                        6
                     </span>
                  </div>
               </div>

               <div className='flex items-center justify-center'>
                  <div className='flex justify-center items-center space-x-2 relative cursor-pointer'>
                     <FaCartArrowDown className='h-7 w-7 flex justify-center items-center' />
                     <span className='text-sm font-semibold dark:text-white text-black'>
                        Cart
                     </span>
                     <span className='absolute top-[-20px] left-1 bg-[#29a56c] dark:bg-white  dark:text-black text-white rounded-full h-7 w-7 flex items-center justify-center text-xs font-bold'>
                        6
                     </span>
                  </div>
               </div>

               <div className='flex justify-center item-center  relative  cursor-pointer'>
                  <DropdownMenu />
               </div>
               <div>
                  <DarkNightMode />
               </div>
            </div>
         </div>
         {/* Navbar section Start Here */}
         <Navbar />
         {/* Navbar section End Here */}
      </>
   );
};

export default Header;
