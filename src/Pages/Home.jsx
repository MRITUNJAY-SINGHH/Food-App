import CustomSlider from '../Common/Slider/CustomSlider';
import HomeSlider from '../components/HomeSlider/HomeSlider';
import infoOne from '../assets/info-1.png';
import infoTwo from '../assets/info-2.png';
import infoThree from '../assets/info-3.png';
import ScrollToTopButton from '../Common/ScrollTop';
import { FaTruckArrowRight } from 'react-icons/fa6';

const BannerData = [
   {
      id: 1,
      image: infoOne,
      title: 'Everyday Fresh & Clean with Our Products',
      background: '#F0E8D5',
      link: '/',
   },
   {
      id: 2,
      image: infoTwo,
      title: 'Make your Breakfast Healthy and Easy',
      background: '#F3E8E8',
      link: '/',
   },
   {
      id: 3,
      image: infoThree,
      title: 'The best Organic Products Online',
      background: '#E9ECF4',
      link: '/',
   },
];

const Home = () => {
   return (
      <div>
         <HomeSlider />
         <CustomSlider />
         <div className='p-6'>
            <div className='flex justify-between items-center'>
               {BannerData.map((item, index) => (
                  <div key={index} className='dark:bg-gray-900  px-4 relative'>
                     <img
                        src={item.image}
                        alt='banner'
                        className='rounded-2xl'
                     />

                     <div className='absolute top-[30%] left-12'>
                        <h1 className='text-[25px] mb-4 font-bold text-[#253D4E] min-h-[80px] max-w-[300px] '>
                           {item.title}
                        </h1>

                        <button className='bg-[#253d4e] text-white primary-btn flex justify-center items-center mt-6'>
                           Shop Now
                           <FaTruckArrowRight className='inline-block ml-2 icon animate-icon' />
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <ScrollToTopButton />
      </div>
   );
};

export default Home;
