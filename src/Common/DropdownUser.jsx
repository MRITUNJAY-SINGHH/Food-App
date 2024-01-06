import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import settingIcon from '../assets/settings-sliders.svg';
import favoriteIcon from '../assets/icon-favorite.svg';
import signInIcon from '../assets/sign-in-alt.svg';
import labelIcon from '../assets/label.svg';
import voucherIcon from '../assets/home-location-alt.svg';
import userIcon from '../assets/icon-user.svg';
import passwordIcon from '../assets/password.svg';

function classNames(...classes) {
   return classes.filter(Boolean).join(' ');
}

const menuItems = [
   { text: 'My Account', icon: userIcon, path: '/my-account' },
   { text: 'Order Tracking', icon: voucherIcon, path: '/order-tracking' },
   { text: 'My Voucher', icon: labelIcon, path: '/my-voucher' },
   { text: 'My Wishlist', icon: favoriteIcon, path: '/my-wishlist' },
   { text: 'Setting', icon: settingIcon, path: '/settings' },
   { text: 'Login', icon: signInIcon, path: '/login' },
   { text: 'Change Password', icon: passwordIcon, path: '/change-password' },
];

export default function DropdownMenu() {
   const [isHovered, setIsHovered] = useState(false);

   const handleItemClick = () => {
      setIsHovered(false);
   };

   return (
      <Menu as='div' className='relative inline-block text-left'>
         <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 mx-3 py-2 text-sm font-semibold text-gray-900 transition-all duration-300 cursor-pointer'
         >
            Account
         </div>

         <Transition
            show={isHovered}
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
         >
            <Menu.Items
               className='absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
            >
               <div className='py-1'>
                  {menuItems.map((menuItem, index) => (
                     <Menu.Item key={index}>
                        {({ active }) => (
                           <Link
                              to={menuItem.path}
                              onClick={handleItemClick}
                              className={classNames(
                                 active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                 'flex items-center px-4 py-2 text-sm transition-all duration-300'
                              )}
                           >
                              <img
                                 src={menuItem.icon}
                                 alt='icons'
                                 className='h-5 w-5 mr-2'
                              />
                              {menuItem.text}
                           </Link>
                        )}
                     </Menu.Item>
                  ))}
               </div>
            </Menu.Items>
         </Transition>
      </Menu>
   );
}
