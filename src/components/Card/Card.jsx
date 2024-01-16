/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import { AiOutlineHeart, AiOutlineSwap, AiOutlineEye } from 'react-icons/ai';
import { FaTruckArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const getRandomColor = () => {
   const colors = [
      '#E7EAF3',
      '#F3E8E8',
      '#BCE3C9',
      '#F5D372',
      '#D6D4E0',
      '#FFB6B6',
      '#AEDFF7',
      '#FFD966',
      '#C7CEEA',
      '#FFA07A',
      '#FFDAB9',
      '#C0C4CF',
      '#FFE4B5',
      '#ADD8E6',
      '#F0FFF0',
   ];

   const randomIndex = Math.floor(Math.random() * colors.length);
   const selectedColor = colors[randomIndex];

   const hexColor = selectedColor.replace(/^#/, '');
   const r = parseInt(hexColor.substring(0, 2), 16);
   const g = parseInt(hexColor.substring(2, 4), 16);
   const b = parseInt(hexColor.substring(4, 6), 16);
   const brightness = (r * 299 + g * 587 + b * 114) / 1000;

   const textColor = brightness > 128 ? '#000' : '#fff';

   return { backgroundColor: selectedColor, textColor };
};

const Card = ({ productData }) => {
   const [currentImage, setCurrentImage] = useState(productData.image);
   const [hovered, setHovered] = useState(false);
   const [colorData, setColorData] = useState(getRandomColor());

   useEffect(() => {
      setColorData(getRandomColor());
   }, []);

   const handleMouseMove = (event) => {
      if (!hovered) {
         setHovered(true);
         const mouseX = event.nativeEvent.offsetX;
         const cardWidth = event.target.clientWidth;
         const ratio = mouseX / cardWidth;
         const interpolatedImage =
            ratio < 0.5 ? productData.image : productData.image2;
         setCurrentImage(interpolatedImage);
      }
   };

   const handleMouseLeave = () => {
      setHovered(false);
      setCurrentImage(productData.image);
   };

   return (
      <div
         className='p-6 w-full h-auto cardDesign relative'
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
      >
         <span
            className='badge absolute top-0 left-0 z-[99]  text-bold'
            style={{
               backgroundColor: colorData.backgroundColor,
               color: colorData.textColor,
            }}
         >
            {productData.offer}
         </span>
         <div className='imgWrapper relative'>
            <img src={currentImage} alt='product' className='w-full' />
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
               <ul className='bg-white w-[200px] h-auto py-2 px-2 border border-solid border-[#BCE3C9] flex justify-between items-center product_list'>
                  <Link tooltip='Add to Wishlist'>
                     <li className='product_border'>
                        <AiOutlineHeart size={25} />
                     </li>
                  </Link>
                  <Link tooltip='Compare'>
                     <li className='product_border'>
                        <AiOutlineSwap size={25} />
                     </li>
                  </Link>
                  <Link tooltip='Quick View'>
                     <li className='product_border'>
                        <AiOutlineEye size={25} />
                     </li>
                  </Link>
               </ul>
            </div>
         </div>

         <div className='productInfo'>
            <span className='opacity-50 text-black text-sm dark:text-white dark:opacity-100'>
               {productData.name}
            </span>
            <p className='text-[18px] w-[260px] font-semibold my-2 dark:text-white dark:opacity-100'>
               {productData.title}
            </p>
            <div className='flex items-center text-sm my-2 dark:text-white dark:opacity-100'>
               <Rating
                  name='half-rating-read'
                  defaultValue={parseFloat(productData.rating)}
                  precision={0.5}
                  readOnly
                  className='rating'
               />
               <div>
                  <span className='text-[#253D4E] ml-2 dark:text-white dark:opacity-100'>
                     {productData.rating}
                  </span>
               </div>
            </div>
            <div className='flex justify-between items-center dark:text-white dark:opacity-100'>
               <div className='flex  justify-center items-center'>
                  <p className='text-[#3BB77E] font-bold text-[16px] dark:text-white'>
                     {productData.price}
                  </p>
                  <p className='text-[#253D4E] ml-2 line-through text-[12px] dark:text-white'>
                     {productData.discount}
                  </p>
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
