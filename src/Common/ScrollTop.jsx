import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Transition } from '@headlessui/react';

const ScrollToTopButton = () => {
   const [showButton, setShowButton] = useState(false);

   const handleScroll = () => {
      if (window.scrollY > 300) {
         setShowButton(true);
      } else {
         setShowButton(false);
      }
   };

   const scrollToTop = () => {
      // Set initial position with a transition
      document.documentElement.style.transition =
         'scroll-margin-top 0.3s ease-in-out';
      document.documentElement.style.scrollMarginTop = '15px'; // Adjust this value as needed

      // Remove transition after a short delay
      setTimeout(() => {
         document.documentElement.style.transition = '';
      }, 300);

      // Scroll to the top smoothly
      setTimeout(() => {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 400);
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <Transition
         show={showButton}
         enter='transition-opacity duration-300'
         enterFrom='opacity-0'
         enterTo='opacity-100'
         leave='transition-opacity duration-300'
         leaveFrom='opacity-100'
         leaveTo='opacity-0'
      >
         <button
            className='fixed bottom-4 right-4 bg-[#253d4e] text-white  px-3 py-3 rounded-sm cursor-pointer'
            onClick={scrollToTop}
         >
            <FaArrowUp className='text-lg' />
         </button>
      </Transition>
   );
};

export default ScrollToTopButton;
