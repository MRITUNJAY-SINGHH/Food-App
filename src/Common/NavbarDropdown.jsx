import { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import '../index.css';

const Dropdown = ({ title, items, icon }) => {
   const [isDropdownOpen, setDropdownOpen] = useState(false);

   const handleToggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
   };

   return (
      <div className='relative group dark:bg-gray-900 text-black dark:text-white'>
         <button
            onClick={handleToggleDropdown}
            className='hover:text-green-600 focus:outline-none flex items-center whitespace-nowrap'
         >
            {title}
            {icon && icon}
            {isDropdownOpen ? (
               <IoIosArrowUp className='inline-block ml-1' />
            ) : (
               <IoIosArrowDown className='inline-block ml-1' />
            )}
         </button>
         {isDropdownOpen && (
            <div className=' dark:bg-gray-900  text-black  dropdown_menu absolute left-full top-0 mt-2  py-4 bg-white border rounded-md shadow-lg z-10 transition-all duration-500 sub-menu'>
               <ul className='dropdown_menu_list space-y-1  text-gray-700 dark:text-white dark:border-none '>
                  {items.map((item, index) => (
                     <li key={index} className='dropdown_menu_list_item'>
                        <Link
                           to={item.link}
                           className='block px-4 py-2 hover:bg-gray-200 dark:hover:bg-orange-800 rounded-md transition-all duration-300'
                        >
                           {item.name}
                        </Link>
                        {item.submenu && (
                           <Dropdown title='' items={item.submenu} />
                        )}
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
};

export default Dropdown;
