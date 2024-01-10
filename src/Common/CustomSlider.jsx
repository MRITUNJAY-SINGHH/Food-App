/* eslint-disable react/prop-types */
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
      autoplay: true,
      autoplaySpeed: 3000,
   };

   return (
      <section className='home_slider'>
         <div className='w-full'>
            <Slider {...settings} className='home_slider_main'>
               <div>
                  <img src={sliderImage1} alt='slider' className='w-full' />
                  <div className='slider-content'>
                     <h2>
                        Don’t miss amazing
                        <br />
                        grocery deals
                     </h2>
                     <p>Save up to 50% off on your first order</p>
                  </div>
               </div>
               <div>
                  <img src={sliderImage2} alt='slider' className='w-full' />
                  <div className='slider-content'>
                     <h2>
                        Fresh Vegetables
                        <br />
                        Big discount
                     </h2>

                     <p>Save up to 50% off on your first order</p>
                  </div>
               </div>
            </Slider>
         </div>
      </section>
   );
}
