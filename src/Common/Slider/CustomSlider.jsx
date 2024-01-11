import Slider from 'react-slick';
import category from '../../assets/cat-13.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

export default function CustomSlider() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 3,
   };

   return (
      <div>
         <Slider {...settings} className='category_slider'>
            <div>
               <img src={category} alt='' />
               <h3>Cake & Milk</h3>
               <h4>Item 24</h4>
            </div>
         </Slider>
      </div>
   );
}
