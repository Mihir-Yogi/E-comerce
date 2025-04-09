import React from 'react';
import Slider from "react-slick";

const HomeBanner = () => {
     var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "ease-in-out",
        arrows: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000
    } 
  return (
    <div className="homeBannerSection">
        <Slider {...settings}>
            <div className="item">
                <img src="https://www.inkbolt.in/_next/image?url=%2Fheros%2Fheronew-2.png&w=1080&q=100" alt='' className='w-100' />
            </div>
            <div className="item">
                <img src="https://www.inkbolt.in/_next/image?url=%2Fheros%2Fheronew-4.png&w=2048&q=100" alt="" className="w-100" />
            </div>
        </Slider>
    </div>
  );
}

export default HomeBanner;