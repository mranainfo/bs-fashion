import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import './HomeBanner.css';

class HomeBanner extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <>
                <Container fluid={true} className="p-0 overflow-hidden">
                    <div>
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            <div>
                                <div className="slider-item">
                                    <img className="slider-img" src={banner1} alt="" />
                                    <div className="content">
                                        <h3 className="title">BS FASHION</h3>
                                        <p className="des">PASSION INNOVATION Full team dedicated to your brand  QUALITY, PRICE & DESIGN From Bangladesh</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="slider-item">
                                    <img className="slider-img" src={banner2} alt="" />
                                    <div className="content">
                                        <h3 className="title">DESIGN</h3>
                                        <p className="des">INTERNATIONAL GRAPHIC & DESIGN TEAMS An exceptional advantage to of our company is our design and graphic design
                                            departments. They offer an array of suggestions and choices for our clients to choose from. Our strength is to offer
                                            updated collections in Woven, light knit & Sweaters matching with our buyer’s needs.</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="slider-item">
                                    <img className="slider-img" src={banner3} alt="" />
                                    <div className="content">
                                        <h3 className="title">PRODUCTION</h3>
                                        <p className="des">OVER 10 YEARS OF EXPERIENCE IN BANGLADESH Our production offices manage the development and merchandising of all orders,
                                            in continuation with our instructions, our highly qualified manufacturers complete the orders. We work side by side with
                                            the manufacturers to ensure the orders be fulfilled to our buyer’s standards as well as our own. This action, along with the
                                            independent quality control team, guarantees a quality finished product.</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>

                        <button onClick={this.previous} className="previous-btn"> <FontAwesomeIcon icon={faChevronLeft}/></button>
                        <button onClick={this.next} className="next-btn"> <FontAwesomeIcon icon={faChevronRight}/></button>
                    </div>
                </Container>
            </>
        );
    }
}

export default HomeBanner;