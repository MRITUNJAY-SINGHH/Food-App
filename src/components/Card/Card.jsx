import Rating from '@mui/material/Rating';
import product from '../../assets/product-1-2.jpg';

import { FaTruckArrowRight } from 'react-icons/fa6';

const Card = () => {
   return (
      <div className='p-6 w-full h-auto  cardDesign'>
         <div className='imgWrapper'>
            <img src={product} alt='product' className='w-full' />
         </div>
         <div className='productInfo'>
            <span className='opacity-50 text-black text-sm'>Snakes</span>
            <p className='text-[18px] font-semibold my-2'>
               Seeds of Change Organic Quinoa, Brown, & Red Rice
            </p>
            <div className='flex items-center text-sm my-2'>
               <Rating
                  name='half-rating-read'
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  className='rating'
               />
               <div>
                  <span className='text-[#253D4E] ml-2'>4.5</span>
               </div>
            </div>
            <div className='flex justify-between items-center'>
               <div className='flex  justify-center items-center'>
                  <p className='text-[#3BB77E] font-bold text-[18px]'>$ 5.99</p>
                  <p className='text-[#253D4E] ml-2 line-through'>$ 6.99</p>
               </div>
               <div>
                  <button className='text-white product-btn flex justify-center items-center '>
                     Shop Now
                     <FaTruckArrowRight className='inline-block ml-2 icon animate-icon' />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Card;
