import React from 'react';
import './Home.css'
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Combo from '../Combo/Combo';

const Home = () => {
    return (
        <div className="pt-2">
            <div className="carosel mt-5 pt-5" id="home">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/master/pass/Burgers-Mumbai-Delivery.jpg"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg"
                            alt="Second slide"
                        />

                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://vegveganmeat.com/wp-content/uploads/2020/12/mushroom-biryani-kalan-biriyani-chettinad-south-indian-style-1.jpg"
                            alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-square-FS-New-7377.jpg"
                            alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <Services></Services>
            </div>
            <div>
                <Combo></Combo>
            </div>
            <div>
                <Contact></Contact>
            </div>

        </div>
    );
};

export default Home;