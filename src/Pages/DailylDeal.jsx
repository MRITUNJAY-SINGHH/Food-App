/* eslint-disable react/prop-types */
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import 'react-multi-carousel/lib/styles.css';
import Card from '../components/Card/Card';
import { FaTruckArrowRight } from 'react-icons/fa6';
import product from '../assets/product-1-1.jpg';
import product1 from '../assets/product-1-2.jpg';
import productTwo from '../assets/product-2-1.jpg';
import product2 from '../assets/product-2-2.jpg';
import productThree from '../assets/product-3-1.jpg';
import product3 from '../assets/product-3-2.jpg';
// import productFour from '../assets/product-4-1.jpg';
// import product4 from '../assets/product-4-2.jpg';
// import productFive from '../assets/product-5-1.jpg';
// import product5 from '../assets/product-5-2.jpg';
// import productSix from '../assets/product-6-1.jpg';
// import product6 from '../assets/product-6-2.jpg';
// import productSeven from '../assets/product-7-1.jpg';
// import product7 from '../assets/product-7-2.jpg';
// import productEight from '../assets/product-8-1.jpg';
// import product8 from '../assets/product-8-2.jpg';
// import productNine from '../assets/product-9-1.jpg';
// import product9 from '../assets/product-9-2.jpg';
// import productTen from '../assets/product-10-1.jpg';
// import product10 from '../assets/product-10-2.jpg';
import banner4 from '../assets/banner-4.png';
import Carousel from 'react-multi-carousel';

const DailyDealData = [
   {
      id: 1,
      name: 'Snakes',
      title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
      price: '$5.99',
      discount: '$6.99',
      rating: '4.5',
      offer: 'Hot',
      image: product,
      image2: product1,
   },
   {
      id: 2,
      name: 'Hodo Foods',
      title: 'All Natural Italian-Style Chicken Meatballs',
      price: '$25.99',
      discount: '$16.99',
      rating: '4.5',
      offer: 'Sale',
      image: productTwo,
      image2: product2,
   },
   {
      id: 3,
      name: 'Snakes',
      title: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn',
      price: '$55.99',
      discount: '$26.99',
      rating: '4.0',
      offer: 'Special',
      image: productThree,
      image2: product3,
   },
];

const DailyDeal = () => {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 4,
         slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
         slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         slidesToSlide: 1, // optional, default to 1.
      },
   };
   const CustomLeftArrow = ({ onClick }) => (
      <button
         type='button'
         onClick={onClick}
         className='custom-arrow custom-prev absolute rounded-full'
      >
         <IoIosArrowRoundBack size={40} />
      </button>
   );

   const CustomRightArrow = ({ onClick }) => (
      <button
         type='button'
         onClick={onClick}
         className='custom-arrow custom-next absolute rounded-full'
      >
         <IoIosArrowRoundForward size={40} />
      </button>
   );
   return (
      <div className='p-6  banner-img '>
         <div className='px-6 pb-10'>
            <h1 className='commonHeading '>Daily Best Sells</h1>
         </div>
         <div className='flex'>
            <div className='relative'>
               <div>
                  <img
                     src={banner4}
                     alt='banner4'
                     className='rounded-[15px] h-[550px] bg-cover'
                  />
               </div>
               <div className='absolute top-10 left-10'>
                  <div className='max-w-[280px] flex justify-center items-center'>
                     <h2 className='text-[43px] text-[#253D4E]  leading-12 font-bold'>
                        Bring nature into your home
                     </h2>
                  </div>
                  <div>
                     <button className='bg-[#253d4e] text-white primary-btn flex justify-center items-center mt-12'>
                        Shop Now
                        <FaTruckArrowRight className='inline-block ml-2 icon animate-icon' />
                     </button>
                  </div>
               </div>
            </div>
            <div className='w-[80%]'>
               {' '}
               <div className=''>
                  <Carousel
                     responsive={responsive}
                     showDots={true}
                     infinite
                     autoPlay
                     autoPlaySpeed={3000}
                     transitionDuration={500}
                     customButtonGroup={<></>}
                     customLeftArrow={<CustomLeftArrow />}
                     customRightArrow={<CustomRightArrow />}
                     dotListClass='custom-dot-list'
                  >
                     {DailyDealData.map((product, id) => (
                        <div className='px-4 pb-12' key={id}>
                           <Card key={product.id} productData={product} />
                        </div>
                     ))}
                  </Carousel>
               </div>
            </div>
         </div>
      </div>
   );
};

export default DailyDeal;
