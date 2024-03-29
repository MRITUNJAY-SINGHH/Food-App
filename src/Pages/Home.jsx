import CustomSlider from '../Common/Slider/CustomSlider';
import HomeSlider from '../components/HomeSlider/HomeSlider';
import infoOne from '../assets/info-1.png';
import infoTwo from '../assets/info-2.png';
import infoThree from '../assets/info-3.png';
import { FaTruckArrowRight } from 'react-icons/fa6';
import Card from '../components/Card/Card';
import product from '../assets/product-1-1.jpg';
import product1 from '../assets/product-1-2.jpg';
import productTwo from '../assets/product-2-1.jpg';
import product2 from '../assets/product-2-2.jpg';
import productThree from '../assets/product-3-1.jpg';
import product3 from '../assets/product-3-2.jpg';
import productFour from '../assets/product-4-1.jpg';
import product4 from '../assets/product-4-2.jpg';
import productFive from '../assets/product-5-1.jpg';
import product5 from '../assets/product-5-2.jpg';
import productSix from '../assets/product-6-1.jpg';
import product6 from '../assets/product-6-2.jpg';
import productSeven from '../assets/product-7-1.jpg';
import product7 from '../assets/product-7-2.jpg';
import productEight from '../assets/product-8-1.jpg';
import product8 from '../assets/product-8-2.jpg';
import productNine from '../assets/product-9-1.jpg';
import product9 from '../assets/product-9-2.jpg';
import productTen from '../assets/product-10-1.jpg';
import product10 from '../assets/product-10-2.jpg';
import DailyDeal from './DailylDeal';

const ProductData = [
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
   {
      id: 4,
      name: 'Vegetables',
      title: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
      price: '$50.99',
      discount: '$30.99',
      rating: '3.8',
      offer: '10% Off',
      image: productFour,
      image2: product4,
   },
   {
      id: 5,
      name: 'Vegetables',
      title: 'Blue Diamond Almonds Lightly Salted Vegetables',
      price: '$20.99',
      discount: '$10.99',
      rating: '3.5',
      offer: '-14% Off',
      image: productFive,
      image2: product5,
   },
   {
      id: 6,
      name: 'Hodo Foods',
      title: 'Chobani Complete Vanilla Greek Yogurt',
      price: '$25.99',
      discount: '$15.99',
      rating: '4.0',
      offer: '-10% Off',
      image: productSix,
      image2: product6,
   },
   {
      id: 7,
      name: 'Meats',
      title: 'Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g',
      price: '$20.99',
      discount: '$9.99',
      rating: '4.3',
      offer: '-10% Off',
      image: productSeven,
      image2: product7,
   },
   {
      id: 8,
      name: 'Cream',
      title: 'Encore Seafoods Stuffed Alaskan Salmon',
      price: '$25.99',
      discount: '$19.99',
      rating: '4.1',
      offer: 'Hot',
      image: productEight,
      image2: product8,
   },
   {
      id: 10,
      name: 'Meats',
      title: 'Gorton’s Beer Battered Fish Fillets with soft paper',
      price: '$6.99',
      discount: '$4.0',
      rating: '4.0',
      offer: 'New',
      image: productNine,
      image2: product9,
   },
   {
      id: 9,
      name: 'Home & Cleaning',
      title: 'Haagen-Dazs Caramel Cone Ice Cream Ketchup',
      price: '$16.99',
      discount: '$8.0',
      rating: '5.0',
      offer: 'Hot-New',
      image: productTen,
      image2: product10,
   },
];

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
         {/* Banner section start */}
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
         {/* Banner section end */}
         {/* Popular Products section start */}
         <div className='p-6'>
            <div className='flex  justify-between items-center px-6'>
               <div>
                  <h1 className='commonHeading'>Popular Products</h1>
               </div>
               <div>
                  <div className='flex items-center justify-center ml-10  cursor-pointer paragraph'>
                     <p>All</p>
                     <p>Milks & Dairies</p>
                     <p>Cake & Milk</p>
                     <p>Fruits</p>
                     <p>Vegetables</p>
                     <p>Snakes</p>
                  </div>
               </div>
            </div>
            <div className='product flex flex-wrap pt-12'>
               <div className='flex flex-wrap'>
                  {ProductData.map((product, id) => (
                     <div className='w-[20%] px-4 pb-12 ' key={id}>
                        <Card key={product.id} productData={product} />
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Popular Products section end */}

         {/*Daily Best Sells Start*/}
         <DailyDeal />
         {/*Daily Best Sells End*/}
      </div>
   );
};

export default Home;
