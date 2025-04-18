import HomeBanner from "../../components/HomeBanner";
import { Button } from "@mui/material";
import { FiArrowRight } from 'react-icons/fi';
import React, { lazy } from "react";
import ProductItem from "../../components/productItem";
import HomeCat from "../../components/HomeCat";
import Slider from "react-slick";
import FeaturesSec from "../../components/Features";
import FaqSection from "../../components/FAQs";

const Home = () => {
    var productSliderOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        lazyLoad: true,

        responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1.2
            }
        }
    ]
    }
    return (
        <>
        <HomeBanner />
        <HomeCat />
        <section className="homeProducts ">
            <div className="product-section-header d-flex align-items-center justify-content-between">
                <div className="info">
                    <h3>BEST SELLERS</h3>
                </div>
                <Button className="viewAllBtn mb-2">
                    View All <FiArrowRight />
                </Button>
            </div>
            <div className="container-fluid px-5">
                <div className="row">
                    <div className="col-md-3 ps-md-4  homebanner">
                        <div className="banner">
                            <img src="https://www.inkbolt.in/_next/image?url=%2Fmission%2Four-mission.png&w=640&q=75" alt='' className="img-fluid w-100 cursor" />
                        </div>
                    </div>
                    <div className="col-md-8 ps-md-4">
                        <div className="product_row w-100 mt-3">
                        
                        <Slider {...productSliderOptions}>
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                        </Slider>
                        </div>

                    </div>

                    
                </div>
            </div>
                        <div className="headingtitle d-flex align-items-center mt-5 w-100 justify-content-between">
                            <div className="info w-75 ">
                                <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                <p className="text-light text-sml mb-0">New Products with updated stocks</p>
                            </div>
                            <Button className="viewAllBtn">
                                View All <FiArrowRight />
                            </Button>
                        </div>
                        
                <div className="container-fluid">
                    <div className="row">

                        <div className="product_row productRow2 w-100 mt-4 d-flex justify-content-center">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                        <div className="viewAllBtnBottom">
                            <Button className="viewAllBtn" style={{width: "200px"}}>
                                View All <FiArrowRight />
                            </Button>
                        </div>
                        <div className="d-flex mt-4 mb-5 bannerSec">
                            <div className="banner">
                                <img src="https://www.easytatt.com.au/cdn/shop/files/semi-permanent_tattoos_882619a7-6dad-4a13-92db-4357c65b7396_720x.jpg?v=1658976432" alt=""/>
                            </div>
                            <div className="banner">
                                <img src="https://www.easytatt.com.au/cdn/shop/files/long_lasting_temporary_tattoo_d75b7dfb-8932-4aa8-9f7d-734b8d10c4d1_720x.jpg?v=1658972967" alt=""/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </section>

        <FeaturesSec />
        <section>
            <FaqSection/>
        </section>
        </>
    )
}

export default Home;