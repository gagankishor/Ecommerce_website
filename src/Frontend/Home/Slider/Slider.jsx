import { Carousel } from "react-bootstrap";
import  "./Slider.css"
const Slider = () => {
    return(
        <Carousel>
        <Carousel.Item className="max-hight color-dark">
          <img
            className="d-block w-100 item "
            src="https://t2.tudocdn.net/592063?w=646&h=284"
            alt="First slide"
          />
          <Carousel.Caption style={{color:'black'}}>
            <h3 className="color-dark">First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="max-hight">
          <img
            className="d-block w-100"
            src="https://i02.appmifile.com/881_operator_global/01/03/2023/d0d8cafab7cd472bf6cb412b96ed08b5.png?f=webp"
            alt="Second slide"
          />

          <Carousel.Caption className="max-hight">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="max-hight">
          <img className="d-block w-100" src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/12/Xiaomi-13-Launch.webp?ssl=1&quality=80&w=f" alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
};
export default Slider;