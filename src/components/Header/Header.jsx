import { FaSearch } from 'react-icons/fa';
import Logo from '../../assets/logo.svg';
import Compare from '../../assets/icon-compare.svg';
import Cart from '../../assets/icon-cart.svg';
import Favorite from '../../assets/icon-favorite.svg';
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
               <div className='flex justify-center item-center space-x-2 relative cursor-pointer'>
                  <img src={Compare} alt='logo' className='' />
                  <span className='text-sm font-semibold dark:text-white text-black'>
                     Compare
                  </span>
                  <span className='absolute top-[-8px] left-1 bg-[#29a56c] dark:bg-white text-black dark:text-black rounded-full h-5 w-5 flex items-center justify-center text-xs'>
                     6
                  </span>
               </div>
               <div className='flex justify-center item-center space-x-2 relative cursor-pointer'>
                  <img src={Favorite} alt='logo' className='w-full' />
                  <span className='text-sm font-semibold dark:text-white text-black'>
                     Wishlist
                  </span>
                  <span className='absolute top-[-8px] left-1 bg-[#29a56c] dark:bg-white text-black dark:text-black rounded-full h-5 w-5 flex items-center justify-center text-xs'>
                     6
                  </span>
               </div>
               <div className='flex justify-center item-center space-x-2 relative cursor-pointer'>
                  <img src={Cart} alt='logo' />
                  <span className='text-sm font-semibold dark:text-white text-black'>
                     Cart
                  </span>
                  <span className='absolute top-[-8px] left-1 bg-[#29a56c] dark:bg-white text-black dark:text-black rounded-full h-5 w-5 flex items-center justify-center text-xs'>
                     6
                  </span>
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
