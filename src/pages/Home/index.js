import HomeBanner from "../../components/HomeBanner";
import { Button } from "@mui/material";
import { FiArrowRight } from 'react-icons/fi';
import React from "react";
import ProductItem from "../../components/productItem";
import HomeCat from "../../components/HomeCat";
import Slider from "react-slick";
const Home = () => {
    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    }
    return (
        <>
        <HomeBanner />
        <HomeCat />
        <section className="homeProducts ">
            <div className="container-fluid px-5">
                <div className="row">
                    <div className="col-md-3 ps-md-4">
                        <div className="banner">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" alt='IMAGE' className="img-fluid w-100 cursor" />
                        </div>
                    </div>
                    <div className="col-md-9 ps-md-4">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="info">
                                <h3>BEST SELLERS</h3>
                                <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                            </div>
                            <Button className="viewAllBtn">
                                View All <FiArrowRight />
                            </Button>
                        </div>
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

                        <div className="d-flex align-items-center mt-5">
                            <div className="info w-75">
                                <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                <p className="text-light text-sml mb-0">New Products with updated stocks</p>
                            </div>
                            <Button className="viewAllBtn">
                                View All <FiArrowRight />
                            </Button>
                        </div>

                        <div className="product_row productRow2 w-100 mt-4 d-flex justify-content">
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home;