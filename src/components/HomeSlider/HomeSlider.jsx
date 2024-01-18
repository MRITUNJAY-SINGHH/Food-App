/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import sliderImage1 from '../../assets/slider-1.png';
import sliderImage2 from '../../assets/slider-2.png';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';
import 'react-multi-carousel/lib/styles.css';
import '../../index.css';

export default function HomeSlider() {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 1,
         slidesToSlide: 1,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 1,
         slidesToSlide: 1,
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         slidesToSlide: 1,
      },
   };

   return (
      <section className='px-4 pt-0 pb-6'>
         <div className='w-full overflow-hidden relative'>
            <Carousel
               responsive={responsive}
               showDots={true}
               infinite
               autoPlay
               autoPlaySpeed={3000}
               transitionDuration={500}
               // removeArrowOnDeviceType={['tablet', 'mobile']}
               customButtonGroup={<></>} // This is to remove
               customLeftArrow={<CustomLeftArrow />}
               customRightArrow={<CustomRightArrow />}
               dotListClass='custom-dot-list'
            >
               <div>
                  <img
                     src={sliderImage1}
                     alt='slider'
                     className='w-full mt-[2rem]  rounded-[15px]'
                  />
                  <div className='absolute top-1/2 left-[-80px] transform -translate-x-72 -translate-y-1/2 text-center w-full z-10'>
                     <h2 className='text-7xl text-gray-800 font-bold mb-5'>
                        Don’t miss amazing
                        <br />
                        grocery deals
                     </h2>
                     <p className='text-3xl text-gray-500 font-medium mb-12'>
                        Save up to 50% off on your first order
                     </p>
                  </div>
               </div>
               <div>
                  <img src={sliderImage2} alt='slider' className='w-full' />
                  <div className='absolute top-1/2 left-[-80px] transform -translate-x-72 -translate-y-1/2 text-center w-full z-10'>
                     <h2 className='text-7xl text-gray-800 font-bold mb-5'>
                        Fresh Vegetables
                        <br />
                        Big discount
                     </h2>
                     <p className='text-3xl text-gray-500 font-medium mb-12'>
                        Save up to 50% off on your first order
                     </p>
                  </div>
               </div>
            </Carousel>
         </div>
      </section>
   );
}

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
