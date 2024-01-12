/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import '../index.css';

const Dropdown = ({
   id,
   title,
   items,
   icon,
   submenuIcon,
   openDropdown,
   setOpenDropdown,
   closeDropdown,
}) => {
   const [isSubmenuOpen, setSubmenuOpen] = useState(false);
   const dropdownRef = useRef(null);

   const handleIconClick = () => {
      if (isSubmenuOpen) {
         setSubmenuOpen(false);
         closeDropdown();
      } else {
         setSubmenuOpen(true);
         setOpenDropdown(id);
      }
   };

   return (
      <div className='relative group text-black dark:text-white z-999'>
         <button
            onClick={handleIconClick}
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
            leave='transition ease-in duration-150'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
         >
            <div
               className='dark:bg-gray-900 text-black absolute left-[-60px] top-10 mt-2 py-4 bg-white border rounded-md shadow-lg z-10 transition-all duration-500 sub-menu'
               ref={dropdownRef}
            >
               <ul className='space-y-1 text-gray-700 dark:text-white dark:border-none'>
                  {items.map((item, index) => (
                     <li
                        key={index}
                        className='flex items-center hover:bg-gray-200 dark:hover:bg-orange-800'
                     >
                        <Link
                           to={item.link}
                           className='px-4 py-2 text-[15px] rounded-md transition-all duration-300 flex justify-between items-center w-full'
                        >
                           {item.name}
                        </Link>
                        {item.submenu && (
                           <Dropdown
                              id={item.id}
                              title=''
                              items={item.submenu}
                              submenuIcon={submenuIcon}
                              openDropdown={openDropdown}
                              setOpenDropdown={setOpenDropdown}
                              closeDropdown={closeDropdown}
                           />
                        )}
                     </li>
                  ))}
               </ul>
            </div>
         </Transition>
      </div>
   );
};

export default Dropdown;
