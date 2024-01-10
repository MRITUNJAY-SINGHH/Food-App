import Slider from 'react-slick';
import sliderImage1 from '../assets/slider-1.png';
import sliderImage2 from '../assets/slider-2.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';

import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';

// Define custom NextArrow component
function NextArrow(props) {
   const { className, style, onClick } = props;
   return (
      <IoIosArrowRoundForward
         className={className}
         style={{ ...style, display: 'block' }}
         onClick={onClick}
      />
   );
}

// Define custom PrevArrow component
function PrevArrow(props) {
   const { className, style, onClick } = props;
   return (
      <IoIosArrowRoundBack
         className={className}
         style={{ ...style, display: 'block' }}
         onClick={onClick}
      />
   );
}
export default function CustomSlider() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
   };

   return (
      <section className='home_slider relative'>
         <div className='w-full'>
            <Slider {...settings} className='home_slider_main'>
               <div className='relative'>
                  <img src={sliderImage1} alt='slider' className='w-full' />
                  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
                     <h2 className='text-2xl font-bold'>Don’t miss amazing</h2>
                     <h3 className='text-2xl font-bold'>
                        <br />
                        grocery deals
                     </h3>
                     <p>
                        {' '}
                        <p>Save up to 50% off on your first order</p>
                     </p>
                  </div>
               </div>
               <div className='relative'>
                  <img src={sliderImage2} alt='slider' className='w-full' />
                  <div className='absolute top-[30%] left-[30%] transform  text-white text-center'>
                     <h2 className='font-bold color-[#253d4e] text-[72px] leading-6'>
                        Fresh Vegetables
                     </h2>
                     <h3 className='font-bold color-[#253d4e] text-[72px] leading-6'>
                        Big discount
                     </h3>
                     <p>Save up to 50% off on your first order</p>
                  </div>
               </div>
            </Slider>
         </div>
      </section>
   );
}
