/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-multi-carousel/lib/styles.css';
import category from '../../assets/cat-1.png';
import category2 from '../../assets/cat-2.png';
import category3 from '../../assets/cat-1.png';
import category4 from '../../assets/cat-1.png';
import category5 from '../../assets/cat-15.png';
import category6 from '../../assets/cat-15.png';
import category7 from '../../assets/cat-11.png';
import category8 from '../../assets/cat-9.png';
import category9 from '../../assets/cat-9.png';
import category10 from '../../assets/cat-11.png';
import category11 from '../../assets/cat-11.png';
import category12 from '../../assets/cat-12.png';
import category13 from '../../assets/cat-13.png';
import category14 from '../../assets/cat-14.png';
import category15 from '../../assets/cat-15.png';
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
         name: 'Category 1',
         image: category,
         item: 'Item 264',
         backgroundColor: '#ECFFEC',
      },
      {
         id: 2,
         name: 'Category 2',
         image: category2,
         item: 'Item 264',
         backgroundColor: '#ECFFEC',
      },
      {
         id: 3,
         name: 'Category 3',
         image: category3,
         item: 'Item 264',
         backgroundColor: '#ECFFEC',
      },
      {
         id: 4,
         name: 'Category 4',
         image: category4,
         item: 'Item 264',
         backgroundColor: '#ECFFEC',
      },
      {
         id: 5,
         name: 'Category 5',
         image: category5,
         item: 'Item 264',
         backgroundColor: '#ECFFEC',
      },
      {
         id: 6,
         name: 'Category 6',
         image: category6,
         item: 'Item 264',
         backgroundColor: '#ECFFEC',
      },
      {
         id: 7,
         name: 'Category 7',
         image: category7,
         item: 'Item 264',
         backgroundColor: '#ECFFEC',
      },
      {
         id: 8,
         name: 'Category 8',
         image: category8,
         item: 'Item 264',
         backgroundColor: '#ECFFEC',
      },
      {
         id: 9,
         name: 'Category 9',
         image: category9,
         item: 'Item 264',
         backgroundColor: '#ECFFEC',
      },
      {
         id: 10,
         name: 'Category 10',
         image: category10,
         item: 'Item 264',
         backgroundColor: '#ECFFEC',
      },
      {
         id: 11,
         name: 'Category 11',
         image: category11,
         item: 'Item 264',
         backgroundColor: '#ECFFEC',
      },
      {
         id: 12,
         name: 'Category 12',
         image: category12,
         item: 'Item 264',
         backgroundColor: '#ECFFEC',
      },
      {
         id: 13,
         name: 'Category 13',
         image: category13,
         item: 'Item 264',
         backgroundColor: '#ECFFEC',
      },
      {
         id: 14,
         name: 'Category 14',
         image: category14,
         item: 'Item 264',
         backgroundColor: '#ECFFEC',
      },
      {
         id: 15,
         name: 'Category 15',
         image: category15,
         item: 'Item 264',
         backgroundColor: '#ECFFEC',
      },
   ];

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
               // removeArrowOnDeviceType={['tablet', 'mobile']}
               customButtonGroup={<></>}
               customLeftArrow={<CustomLeftArrow />}
               customRightArrow={<CustomRightArrow />}
               beforeChange={customBeforeChange}
               className='pt-[5rem] px-4 pb-[2rem]'
            >
               {data.map((item, id) => (
                  <div
                     key={id}
                     className='item mx-2'
                     style={{
                        backgroundColor: item.backgroundColor,
                     }}
                  >
                     <img src={item.image} alt={item.name} />
                     <h3 className='text-[#253d4e] font-bold text-md'>
                        {item.name}
                     </h3>
                     <h4>{item.item}</h4>
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
      <IoIosArrowRoundBack size={30} />
   </button>
);

const CustomRightArrow = ({ onClick }) => (
   <button
      type='button'
      onClick={onClick}
      className='custom-arrowSlider custom-nextSlider'
   >
      <IoIosArrowRoundForward size={30} />
   </button>
);
