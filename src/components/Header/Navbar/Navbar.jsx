import { Link } from 'react-router-dom';
import { FaBars, FaFire, FaShoppingBasket } from 'react-icons/fa';
import '../Header.css';
import { useState } from 'react';
import Apps from '../../../assets/apps.svg';

const Navbar = () => {
   const NavbarData = [
      {
         id: 1,
         title: 'Deals',
         link: '/Deals',
         icon: <FaBars />,
      },
      {
         id: 2,
         title: 'Home',
         link: '/',
         icon: <FaFire />,
      },
      {
         id: 3,
         title: 'About',
         link: '/About',
         icon: <FaShoppingBasket />,
      },
      {
         id: 4,
         title: 'Shop',
         link: '/shop',
         icon: <FaShoppingBasket />,
         hasDropdown: true, // Add this property to indicate that there's a dropdown
      },
   ];

   const [showShopDropdown, setShowShopDropdown] = useState(false);

   const toggleShopDropdown = () => {
      setShowShopDropdown(!showShopDropdown);
   };
   return (
      <div className='NavbarBorder'>
         <div className='flex justify-between items-center mx-2 my-4'>
            <div className='NavbarLeft  flex justify-center items-center text-white'>
               <img src={Apps} alt='logo' className='mr-2 h-5' />
               <h3 className='capitalize'>Browser All Categories</h3>

               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='30px'
               >
                  <g
                     fill='white'
                     id='_01_align_center'
                     data-name='01 align center'
                  >
                     <path d='M12,15.5a1.993,1.993,0,0,1-1.414-.585L5.293,9.621,6.707,8.207,12,13.5l5.293-5.293,1.414,1.414-5.293,5.293A1.993,1.993,0,0,1,12,15.5Z' />
                  </g>
               </svg>
            </div>
            <div className='NavbarRight'>
               <ul className='flex justify-between items-center'>
                  {NavbarData.map((item) => (
                     <li key={item.id}>
                        <button
                           onClick={
                              item.hasDropdown ? toggleShopDropdown : null
                           }
                        >
                           <Link to={item.link}>
                              {item.icon}
                              {item.title}
                           </Link>
                           {/* Dropdown content for the "Shop" section */}
                           {item.hasDropdown && showShopDropdown && (
                              <div className='dropdown-content'>
                                 {/* Add your dropdown content here */}
                                 <Link to='/category1'>Category 1</Link>
                                 <Link to='/category2'>Category 2</Link>
                                 {/* Add more categories as needed */}
                              </div>
                           )}
                        </button>
                     </li>
                  ))}
               </ul>
            </div>
            <div className='NavbarCenter'></div>
         </div>
      </div>
   );
};

export default Navbar;
