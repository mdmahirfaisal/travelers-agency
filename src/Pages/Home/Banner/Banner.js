import React from 'react';
import './Banner.css';
import Fade from 'react-reveal/Fade';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <div className="slide1">
                        <div className="container d-flex align-item-center justify-content-center">
                            <div className=" banner-text  mx-auto" style={{ width: '90%' }}>
                                <Fade bottom duration={1000} distance="100px">  <h1 className="text-light   " style={{ marginTop: '30%' }}> YOUR JOURNEY BEGINS</h1></Fade>
                                <Fade bottom duration={1500} distance="150px">   <p className="text-light "><i>Tourism is travel for pleasure or business; also the theory and practice of touring, the business of attracting, accommodating, and entertaining tourists, and the business of operating tours.[2] The World Tourism Organization defines tourism.</i></p></Fade>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slide2">
                        <div className="container d-flex align-item-center justify-content-center">
                            <div className=" banner-text  mx-auto" style={{ width: '90%' }}>
                                <Fade bottom duration={1000} distance="100px">  <h1 className="text-light   " style={{ marginTop: '30%' }}>AWE-INSPIRING SETTINGS</h1></Fade>
                                <Fade bottom duration={1500} distance="150px">   <p className="text-light "><i>Tourism numbers declined as a result of a strong economic slowdown (the late-2000s recession) between the second half of 2008 and the end of 2009, and in consequence of the outbreak of the 2009 H1N1 influenza virus,[4][5] but slowly.</i></p></Fade>
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slide3">
                        <div className="container d-flex align-item-center justify-content-center">


                            <div className=" banner-text  mx-auto" style={{ width: '90%' }}>
                                <Fade bottom duration={1000} distance="100px">  <h1 className="text-light   " style={{ marginTop: '30%' }}>HISTORIC LANDMARKS</h1></Fade>
                                <Fade bottom duration={1500} distance="150px">   <p className="text-light "><i>Globally, international tourism receipts (the travel item in balance of payments) grew to US$1.03 trillion (€740 billion) in 2005, corresponding to an increase in real terms of 3.8% from 2010.[7] International tourist arrivals surpassed the.</i></p></Fade>

                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="slide4">
                        <div className="container d-flex align-item-center justify-content-center">
                            <div className=" banner-text  mx-auto" style={{ width: '90%' }}>
                                <Fade bottom duration={1000} distance="100px">  <h1 className="text-light   " style={{ marginTop: '30%' }}>A MYSTICAL ADVENTURE</h1></Fade>
                                <Fade bottom duration={1500} distance="150px">   <p className="text-light "><i>Global tourism accounts for c. 8% of global greenhouse-gas emissions.[10] Emissions as well as other significant environmental and social impacts that are not always beneficial to local communities and their economies. For this reason.</i></p></Fade>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>

        </>
    );
};

export default Banner;