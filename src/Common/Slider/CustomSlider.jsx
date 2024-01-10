import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
const CustomSlider = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 1,
      arrows: true,
   };
   const data = [
      {
         id: 1,
         image: 'https://picsum.photos/200/300',
         title: 'Grocery',
         item: '100 Item',
         background: '#FFF3EB',
      },
   ];
   return (
      <div className='category_Slider'>
         <div className='w-full'>
            <h2 className='commonHeading'>Features Categories</h2>
            <Slider {...settings} className='category_slider_main'>
               {data.map((item) => (
                  <div key={item.id}>
                     <div
                        className='category_slider_item'
                        style={{ background: item.background }}
                     >
                        <img src={item.image} alt='slider' />
                        <h3>{item.title}</h3>
                        <p>{item.item}</p>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   );
};

export default CustomSlider;
