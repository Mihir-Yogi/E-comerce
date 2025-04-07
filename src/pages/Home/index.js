import HomeBanner from "../../components/HomeBanner";
import { Button } from "@mui/material";
import { FiArrowRight } from 'react-icons/fi';
import React from "react";
import ProductItem from "../../components/productItem";
import HomeCat from "../../components/HomeCat";

const Home = () => {
    
    return (
        <>
        <HomeBanner />
        <HomeCat />
        <section className="homeProducts ">
            <div className="container-fluid px-5">
                <div className="row">
                    <div className="col-md-3 ps-md-4">
                        <div className="banner">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" className="img-fluid w-100 cursor" />
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