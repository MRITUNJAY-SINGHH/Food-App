import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import category from '../../assets/cat-13.png';

const responsive = {
   superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
   },
   desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
   },
   tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
   },
   mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
   },
};

export default function CustomSlider() {
   return (
      <Carousel responsive={responsive}>
         <div>
            <img src={category} alt='' />
            <h3>Cake & Milk</h3>
            <h4>Item 24</h4>
         </div>
         <div>
            <img src={category} alt='' />
            <h3>Cake & Milk</h3>
            <h4>Item 24</h4>
         </div>
         <div>
            <img src={category} alt='' />
            <h3>Cake & Milk</h3>
            <h4>Item 24</h4>
         </div>
         <div>
            <img src={category} alt='' />
            <h3>Cake & Milk</h3>
            <h4>Item 24</h4>
         </div>
      </Carousel>
   );
}
