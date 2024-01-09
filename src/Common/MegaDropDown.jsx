/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import '../index.css';

const MegaDropDown = ({ title, items, icon, submenuIcon }) => {
   const [isSubmenuOpen, setSubmenuOpen] = useState(false);
   const dropdownRef = useRef(null);

   const handleToggleSubmenu = () => {
      setSubmenuOpen(!isSubmenuOpen);
   };

   const handleMouseEnter = () => {
      setSubmenuOpen(true);
   };

   const handleMouseLeave = () => {
      setSubmenuOpen(false);
   };

   const handleIconMouseEnter = () => {
      setSubmenuOpen(true);
   };

   return (
      <div className='relative group text-black dark:text-white z-50'>
         <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleToggleSubmenu}
            className='hover:text-green-600 dark:hover:text-white focus:outline-none flex items-center whitespace-nowrap'
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
            enter='transition ease-out duration-200'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-150'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
         >
            <div
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               className='dark:bg-gray-900 text-black dropdown_menu absolute left-[-60px] top-4 mt-2 py-4 bg-white border rounded-md shadow-lg z-10 transition-all duration-500 sub-menu flex'
               ref={dropdownRef}
            >
               {items.map((item, index) => (
                  <div key={index} className='w-1/4 px-4 h-full flex flex-col'>
                     <Link
                        to={item.link}
                        className='px-4 py-2 text-[16px] rounded-md transition-all duration-300'
                     >
                        {item.title}
                     </Link>
                     {item.submenus && (
                        <ul className='space-y-1 text-gray-700 dark:text-white dark:border-none '>
                           {item.submenus.map((submenu, subindex) => (
                              <li
                                 key={subindex}
                                 className='flex items-center hover:bg-gray-200 dark:hover:bg-orange-800'
                              >
                                 <Link
                                    to={submenu.link}
                                    className=' px-4 py-2 text-[16px]  rounded-md transition-all duration-300 flex justify-between items-center w-full'
                                 >
                                    {submenu.name}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     )}
                  </div>
               ))}
            </div>
         </Transition>
      </div>
   );
};

export default MegaDropDown;
