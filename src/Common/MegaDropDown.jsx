import React, { useState, useRef } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import bannerImage from '../assets/banner-menu.png';

const MegaDropDown = ({ title, items, icon }) => {
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

   return (
      <div className='mega relative group'>
         <Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleToggleSubmenu}
            className='hover:text-green-600 dark:hover:text-white flex items-center whitespace-nowrap'
         >
            {title}
            {isSubmenuOpen ? (
               <IoIosArrowUp className='inline-block ml-1' />
            ) : (
               <IoIosArrowDown className='inline-block ml-1' />
            )}
         </Link>
         <Transition
            show={isSubmenuOpen}
            enter='transition ease-out duration-300'
            enterFrom='opacity-0 transform scale-95'
            enterTo='opacity-100 transform scale-100'
            leave='transition ease-in duration-200'
            leaveFrom='opacity-100 transform scale-100'
            leaveTo='opacity-0 transform scale-95'
         >
            <div
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               className='dropdown_Menu MegaMenu flex justify-between items-center'
               ref={dropdownRef}
            >
               {items.map((item, index) => (
                  <div key={index}>
                     <h3>{item.title}</h3>
                     {Array.isArray(item.submenus) && (
                        <ul>
                           {item.submenus.map((submenu, subindex) => (
                              <li key={subindex}>
                                 <Link to={submenu.link}>{submenu.name}</Link>
                              </li>
                           ))}
                        </ul>
                     )}
                     {item.image && <img src={bannerImage} alt='' />}
                  </div>
               ))}
               <div></div>
            </div>
         </Transition>
      </div>
   );
};

export default MegaDropDown;
