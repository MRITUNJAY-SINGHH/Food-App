import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import sliderImage1 from '../../assets/slider-1.png';
import sliderImage2 from '../../assets/slider-2.png';
export default function HomeSlider() {
   return (
      <section className='p-8'>
         <div className='w-full rounded-3xl overflow-hidden relative'>
            <Carousel
               showThumbs={false}
               showStatus={false}
               infiniteLoop
               autoPlay
               interval={3000}
               transitionTime={500}
            >
               <div>
                  <img src={sliderImage1} alt='slider' className='w-full' />
                  <div className='absolute top-1/2 left-1/2 transform -translate-x-72 -translate-y-1/2 text-center w-full z-10'>
                     <h2 className='text-6xl text-gray-800 font-bold mb-5'>
                        Don’t miss amazing
                        <br />
                        grocery deals
                     </h2>
                     <p className='text-xl text-gray-400 font-medium mb-12'>
                        Save up to 50% off on your first order
                     </p>
                  </div>
               </div>
               <div>
                  <img src={sliderImage2} alt='slider' className='w-full' />
                  <div className='absolute top-1/2 left-1/2 transform -translate-x-72 -translate-y-1/2 text-center w-full z-10'>
                     <h2 className='text-6xl text-gray-800 font-bold mb-5'>
                        Fresh Vegetables
                        <br />
                        Big discount
                     </h2>

                     <p className='text-xl text-gray-400 font-medium mb-12'>
                        Save up to 50% off on your first order
                     </p>
                  </div>
               </div>
            </Carousel>
         </div>
      </section>
   );
}
