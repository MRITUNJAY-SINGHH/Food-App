import '../Header.css';
const Navbar = () => {
   return (
      <div className='NavbarBorder'>
         <div className='flex justify-between items-center mx-2 my-4'>
            <div className='NavbarLeft  flex justify-center items-center text-white'>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  id='Outline'
                  className='mr-2'
                  viewBox='0 0 24 24'
                  width='20px'
               >
                  <path
                     fill='white'
                     d='M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z'
                  />
                  <path
                     fill='white'
                     d='M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z'
                  />
                  <path
                     fill='white'
                     d='M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z'
                  />
                  <path
                     fill='white'
                     d='M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z'
                  />
               </svg>
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
            <div className='NavbarRight'></div>
            <div className='NavbarCenter'></div>
         </div>
      </div>
   );
};

export default Navbar;
