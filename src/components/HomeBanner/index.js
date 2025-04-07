import React from 'react';
import Slider from "react-slick";
import banner1 from "../../assets/banners/banner1.png";

const HomeBanner = () => {
     var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "ease-in-out",
        arrows: false,
        adaptiveHeight: true,
        autoplay: true
    } 
  return (
    <div className="homeBannerSection">
        <Slider {...settings}>
            <div className="item">
                <img src={banner1} alt='banner1' className='w-100' />
            </div>
            <div className="item">
                <img src="https://cmsimages.shoppersstop.com/Watches_web_11814618d3/Watches_web_11814618d3.png" alt="Banner 1" className="w-100" />
            </div>
        </Slider>
    </div>
  );
}

export default HomeBanner;