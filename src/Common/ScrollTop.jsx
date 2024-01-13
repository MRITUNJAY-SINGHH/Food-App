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
      let targetScroll = window.scrollY - 100;
      if (targetScroll < 0) targetScroll = 0;

      const slowScroll = () => {
         const currentScroll = window.scrollY;
         if (currentScroll > targetScroll) {
            window.scrollTo(0, currentScroll - 1);
            requestAnimationFrame(slowScroll);
         } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
         }
      };

      slowScroll();
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
         <div className='fixed bottom-4 right-4 transition transform customHover duration-300'>
            <button
               className='dark:bg-white animate-icon bg-white dark:text-black px-3 py-3 rounded-full text-black cursor-pointer border border-black dark:border-white'
               onClick={scrollToTop}
            >
               <FaArrowUp className='text-lg' />
            </button>
         </div>
      </Transition>
   );
};

export default ScrollToTopButton;
