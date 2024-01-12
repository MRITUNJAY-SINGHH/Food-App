/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-multi-carousel/lib/styles.css';
import category from '../../assets/cat-1.png';
import category2 from '../../assets/cat-2.png';
import category3 from '../../assets/cat-3.png';
import category4 from '../../assets/cat-4.png';
import category5 from '../../assets/cat-5.png';
import category6 from '../../assets/cat-15.png';
import category7 from '../../assets/cat-13.png';
import category8 from '../../assets/cat-3.png';
import category9 from '../../assets/cat-9.png';
import category11 from '../../assets/cat-11.png';
import category12 from '../../assets/cat-12.png';
import category13 from '../../assets/cat-13.png';
import category14 from '../../assets/cat-14.png';
import category15 from '../../assets/cat-15.png';
import './Slider.css';
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
   const customBeforeChange = (nextSlide, { currentSlide }) => {
      if (nextSlide !== currentSlide) {
         // Disable drag by preventing the change of slides
         return false;
      }
      return true;
   };
   const data = [
      {
         id: 1,
         name: 'Vegetables',
         image: category,
         item: `Item ${Math.floor(Math.random() * 1000)}`,
         backgroundColor: '#F2FCE4',
      },
      {
         id: 2,
         name: 'Strawberry',
         image: category2,
         item: `Item ${Math.floor(Math.random() * 1000)}`,
         backgroundColor: '#F2FCE4',
      },
      {
         id: 3,
         name: 'Snakes',
         image: category3,
         item: `Item ${Math.floor(Math.random() * 1000)}`,
         backgroundColor: '#FFFCEB',
      },
      {
         id: 4,
         name: 'Black pulm',
         image: category4,
         item: `Item ${Math.floor(Math.random() * 1000)}`,
         backgroundColor: '#FEEFEA',
      },
      {
         id: 5,
         name: 'Custard Apple',
         image: category5,
         item: `Item ${Math.floor(Math.random() * 1000)}`,
         backgroundColor: '#FFF3EB',
      },
      {
         id: 6,
         name: 'Headphones',
         image: category6,
         item: `Item ${Math.floor(Math.random() * 1000)}`,
         backgroundColor: '#FFF3FF',
      },
      {
         id: 7,
         name: 'Cake & Pastry',
         image: category7,
         item: `Item ${Math.floor(Math.random() * 1000)}`,
         backgroundColor: '#F2FCE4',
      },
      {
         id: 8,
         name: 'Snakes',
         image: category8,
         item: `Item ${Math.floor(Math.random() * 1000)}`,
         backgroundColor: '#FEEFEA',
      },
      {
         id: 9,
         name: 'Red Apple',
         image: category9,
         item: `Item ${Math.floor(Math.random() * 1000)}`,
         backgroundColor: '#FFFCEB',
      },
      {
         id: 11,
         name: 'Peach',
         image: category11,
         item: `Item ${Math.floor(Math.random() * 1000)}`,
         backgroundColor: '#FFF3EB',
      },
      {
         id: 12,
         name: 'Organic Kiwi',
         image: category12,
         item: `Item ${Math.floor(Math.random() * 1000)}`,
         backgroundColor: '#F2FCE4',
      },
      {
         id: 13,
         name: 'Cake & Pastry',
         image: category13,
         item: `Item ${Math.floor(Math.random() * 1000)}`,
         backgroundColor: '#FEEFEA',
      },
      {
         id: 14,
         name: 'Coffee & Tea',
         image: category14,
         item: `Item ${Math.floor(Math.random() * 1000)}`,
         backgroundColor: '#FFFCEB',
      },
      {
         id: 15,
         name: 'Headphones',
         image: category15,
         item: `Item ${Math.floor(Math.random() * 1000)}`,
         backgroundColor: '#FEEFEA',
      },
   ];

   return (
      <div className='p-6 mt-6'>
         <div className='w-full rounded-2xl overflow-hidden'>
            <div className='flex items-center paragraph'>
               <div className='px-2'>
                  <h1 className='commonHeading'>Featured Categories</h1>
               </div>
               <div className='flex items-center justify-center ml-10  cursor-pointer paragraph'>
                  <p>Cake & Milk</p>
                  <p>Cake & Milk</p>
                  <p>Cake & Milk</p>
                  <p>Cake & Milk</p>
               </div>
            </div>

            <Carousel
               responsive={responsive}
               showDots={false}
               infinite
               autoPlay
               autoPlaySpeed={3000}
               transitionDuration={500}
               beforeChange={customBeforeChange}
               className='pt-[5rem] px-4 pb-[2rem] relative'
            >
               {data.map((item, id) => (
                  <div
                     key={id}
                     className='item mx-2'
                     style={{
                        backgroundColor: item.backgroundColor,
                        minHeight: '180px',
                     }}
                  >
                     <img src={item.image} alt={item.name} />
                     <h3 className='text-[#253d4e] font-bold text-md'>
                        {item.name}
                     </h3>
                     <h4 className='text-sm'>{item.item}</h4>
                  </div>
               ))}
            </Carousel>
            <button className='bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-500 px-4 py-2 text-white rounded-md'>
               <IoIosArrowRoundForward />
            </button>
            <button className='bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-500 px-4 py-2 text-white rounded-md'>
               <IoIosArrowRoundBack />
            </button>
         </div>
      </div>
   );
}
