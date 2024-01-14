/* eslint-disable react/prop-types */
import { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import '../index.css';
import banner from '../assets/banner-menu.png';
import { FaTruckArrowRight } from 'react-icons/fa6';

const MegaDropdown = ({ title, items, icon }) => {
   const [isSubmenuOpen, setSubmenuOpen] = useState(false);

   const handleToggleSubmenu = () => {
      setSubmenuOpen(!isSubmenuOpen);
   };

   const handleClickOutside = (event) => {
      // Close the submenu when clicking outside of the dropdown
      if (event.target.closest('.group') === null) {
         setSubmenuOpen(false);
      }
   };

   // Attach a click event listener to the document to close the submenu when clicking outside
   document.addEventListener('click', handleClickOutside);

   return (
      <div className='relative group text-black dark:text-white z-50'>
         <button
            className='hover:text-green-600 dark:hover:text-white focus:outline-none flex items-center whitespace-nowrap'
            onClick={handleToggleSubmenu}
         >
            {title}
            {icon && <span className='ml-1 cursor-pointer'>{icon}</span>}
            {isSubmenuOpen ? (
               <IoIosArrowUp className='inline-block ml-1' />
            ) : (
               <IoIosArrowDown className='inline-block ml-1' />
            )}
         </button>
         <Transition
            show={isSubmenuOpen}
            enter='transition ease-out duration-50'
            leave='transition ease-in duration-150'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
         >
            <div className='dark:bg-gray-900 text-black dropdown_menu absolute left-[-825px] mx-auto top-[40px] mt-2 mx py-4 bg-white border rounded-md shadow-lg z-10 transition-all duration-500 sub-menu flex'>
               {items.map((item, index) => (
                  <div
                     key={index}
                     className='px-4 h-full flex flex-col w-[423px]'
                  >
                     <Link
                        to={item.link}
                        className='px-4 py-2 rounded-md transition-all duration-300 text-[#29a56c] font-bold text-[20px]'
                     >
                        {item.title}
                     </Link>
                     {item.submenus && (
                        <ul className='text-gray-700 dark:text-white dark:border-none '>
                           {item.submenus.map((submenu, subindex) => (
                              <li
                                 key={subindex}
                                 className='flex items-center hover:bg-gray-200 dark:hover:bg-orange-800 '
                              >
                                 <Link
                                    to={submenu.link}
                                    className=' px-4 py-2 text-[15px]  rounded-md transition-all duration-300 flex justify-between items-center w-full'
                                 >
                                    {submenu.name}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     )}
                     {item.image && (
                        <img
                           src={banner}
                           alt=''
                           className='w-full ml-[-30px]'
                        />
                     )}
                     {item.content && (
                        <div className='flex   items-start absolute'>
                           <p className='text-[#343333]  w-[350px] text-[20px] absolute top-[40px] left-0'>
                              {item.content.deal}
                           </p>
                           <h3 className='text-[#151313] w-[230px] font-bold text-[24px] absolute top-[80px] '>
                              {item.content.title}
                           </h3>
                           <p className='text-[#7FB639] font-bold text-[20px] w-[250px]  absolute top-[160px]'>
                              {item.content.price}
                           </p>
                           <p className='text-[#000] font-bold text-[14px] rounded-[100%] bg-yellow-400 px-2 py-4 max-w-[70px] text-center right-[-340px] top-8 absolute'>
                              {item.content.discount}
                           </p>
                           <Link
                              to={item.content.link}
                              className='top-[200px] w-[120px] absolute'
                           >
                              <button className='bg-[#253d4e] text-white primary-btn flex justify-center items-center'>
                                 Shop Now
                                 <FaTruckArrowRight className='inline-block ml-2 icon animate-icon' />
                              </button>
                           </Link>
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </Transition>
      </div>
   );
};

export default MegaDropdown;
