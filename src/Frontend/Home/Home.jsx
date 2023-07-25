import {
  Container,
  Button,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from "react";
// import Slider from "./Slider/Slider";
// import Navbar1 from "./Navbar/Navbar1";
const Home = () => {
  const [Product, setProduct] = useState([
    {
      titel: "Apple",
      img: "https://www.globalbrandsmagazine.com/wp-content/uploads/2023/01/Top-10-Mobile-Brands-in-World.jpg",
    },
    {
      titel: "Vivo",
      img: "https://m.media-amazon.com/images/I/41vUhpSE89L._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      titel: "Xiaomi",
      img: "https://www.techarena.co.ke/wp-content/uploads/2021/09/Xiaomi-Redmi-10-1140x694.jpg",
    },
    {
      titel: "Samsung",
      img: "https://images.samsung.com/is/image/samsung/assets/in/2208/pfs/02-01-B4-kv-FlexCam-mo-720x540.jpg?$FB_TYPE_J_F_MO_JPG$",
    },
    {
      titel: "Oneplus",
      img: "https://s3no.cashify.in/cashify/store/product//d6ac1bee08ce48078659684d2a71f6b2.jpg?p=es5sq&s=es",
    },
    {
      titel: "NOKIA",
      img: "https://img.uswitch.com/n36b8lzdmgnp/7hu6r5pfWys6uU5GPtdXnw/244ba280b390efa90bf0d6867c7cf246/history_of_mobile_phones.jpeg?auto=format%2Ccompress&q=35&ixlib=react-9.5.1-beta.1&w=1054",
    },
  ]);

  return (
    <>
     
     <Container>
     
     <Row className="bg-red mb-3 mt-4 ">
      <Col sm={8} className="mx-auto btn btn-sucses text-center">
      <h3>MOBILE</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor voluptatum ab voluptatem exercitationem ducimus ipsam, quidem quo eius modi maxime adipisci dolorem corrupti non nam reprehenderit at repellendus. Praesentium!</p>
      </Col>
     </Row>

      <Container className="d-flex">
        <Row>
          {Product.map((prod) => (
            <Col sm={3} >
              <>
                <Card className="mb-4">
                  <Card.Img style={{ height: '150px' }} variant="top" src={prod.img} />
                  <Card.Body >
                    <Card.Title>{prod.titel}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      
                      
                    </Card.Text>
                  </Card.Body>
                  

                  <Card.Body className="text-aline-center d-flex">
                  
                  <del>₹ 700 </del> <h4 className="ms-2"> ₹ 500</h4> 
                    <Button className="btn btn-primeary ms-auto">Add </Button>
                  </Card.Body>
                </Card>
              </>
            </Col>
          ))}
        </Row>
      </Container>
      </Container>
    </>
  );
};
export default Home;
