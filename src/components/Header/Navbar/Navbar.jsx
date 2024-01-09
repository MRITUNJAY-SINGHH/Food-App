import React from 'react';
import { IoHelpCircle } from 'react-icons/io5';
import ArrowDown from '../../../assets/ArrowDown.svg';
import icon from '../../../assets/icon-hot.svg';
import Apps from '../../../assets/apps.svg';
import { Link } from 'react-router-dom';
import Dropdown from '../../../Common/NavbarDropdown';
import {
   blogDropdownData,
   pagesDropdownData,
   vendorsDropdownData,
   shopDropdownData,
   megaMenuData,
} from '../../../data/DropdownData';
import MegaDropDown from '../../../Common/MegaDropdown';

const Navbar = () => {
   return (
      <div className='NavbarBorder'>
         <div className='flex items-center justify-between mx-4 my-4'>
            <div className='NavbarLeft flex justify-center items-center text-white'>
               <img src={Apps} alt='logo' className='mr-2 h-5' />
               <h3 className='capitalize font-bold'>Browse All Categories</h3>
               <img src={ArrowDown} alt='arrow-icon' className='h-7 mr-2' />
            </div>
            <div className='NavbarRight flex justify-center items-center'>
               <ul className='flex justify-between items-center capitalize text-[18px] gap-8 font-bold mr-28'>
                  <li>
                     <Link className='flex items-center justify-center'>
                        <img src={icon} alt='icon-hot' className='h-6 mr-2' />
                        Deal
                     </Link>
                  </li>
                  <li>
                     <Link>Home</Link>
                  </li>
                  <li>
                     <Dropdown title='Shop' items={shopDropdownData.items} />
                  </li>
                  <li>
                     <Dropdown
                        title='Vendors'
                        items={vendorsDropdownData.items}
                     />
                  </li>
                  <li className='relative'>
                     <MegaDropDown title='Mega Menu' items={megaMenuData} />
                  </li>
                  <li className='relative'>
                     <Dropdown title='Blogs' items={blogDropdownData.items} />
                  </li>
                  <li className='relative'>
                     <Dropdown title='Pages' items={pagesDropdownData.items} />
                  </li>
                  <li>
                     <Link>About</Link>
                  </li>
                  <li>
                     <Link>Contact</Link>
                  </li>
               </ul>
            </div>
            <div className='NavbarCenter flex justify-end items-end'>
               <div className='help-section flex items-center text-lg cursor-pointer mr-8'>
                  <IoHelpCircle className='mr-2 text-2xl' />
                  <span>Help</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
