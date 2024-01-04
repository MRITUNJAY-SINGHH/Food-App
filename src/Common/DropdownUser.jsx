import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
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
   { text: 'My Account', icon: userIcon },
   { text: 'Order Tracking', icon: voucherIcon },
   { text: 'My Voucher', icon: labelIcon },
   { text: 'My Wishlist', icon: favoriteIcon },
   { text: 'Setting', icon: settingIcon },
   { text: 'Login', icon: signInIcon },
   { text: 'Change Password', icon: passwordIcon },
];

export default function DropdownMenu() {
   const [isHovered, setIsHovered] = useState(false);

   const handleItemClick = () => {
      // Add your navigation logic here
      console.log('Navigate to the desired section');
   };

   return (
      <Menu as='div' className='relative inline-block text-left'>
         <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 transition-all duration-300 cursor-pointer'
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
                           <a
                              href='#'
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
                           </a>
                        )}
                     </Menu.Item>
                  ))}
               </div>
            </Menu.Items>
         </Transition>
      </Menu>
   );
}
