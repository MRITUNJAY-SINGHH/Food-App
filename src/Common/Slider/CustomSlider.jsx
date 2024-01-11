/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-multi-carousel/lib/styles.css';
import category from '../../assets/cat-13.png';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';
import './Slider.css';

export default function HomeSlider() {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 8,
         slidesToSlide: 1,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 6,
         slidesToSlide: 1,
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 4,
         slidesToSlide: 1,
      },
   };

   return (
      <section className='p-6 mt-6'>
         <div className='w-full rounded-2xl overflow-hidden relative'>
            <Carousel
               responsive={responsive}
               showDots={false}
               infinite
               autoPlay
               autoPlaySpeed={3000}
               transitionDuration={500}
               removeArrowOnDeviceType={['tablet', 'mobile']}
               customButtonGroup={<></>}
               customLeftArrow={<CustomLeftArrow />}
               customRightArrow={<CustomRightArrow />}
               className='pt-[5rem] px-4'
            >
               {[...Array(20).keys()].map((item) => (
                  <div key={item} className='item'>
                     <img src={category} alt='' />
                     <h3>Cake & Milk</h3>
                     <h4>Item {item + 1}</h4>
                  </div>
               ))}
            </Carousel>
         </div>
      </section>
   );
}

const CustomLeftArrow = ({ onClick }) => (
   <button
      type='button'
      onClick={onClick}
      className='custom-arrowSlider custom-prevSlider'
   >
      <IoIosArrowRoundBack size={40} />
   </button>
);

const CustomRightArrow = ({ onClick }) => (
   <button
      type='button'
      onClick={onClick}
      className='custom-arrowSlider custom-nextSlider'
   >
      <IoIosArrowRoundForward size={40} />
   </button>
);
