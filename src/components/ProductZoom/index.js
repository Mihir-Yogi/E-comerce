import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { useRef } from 'react';

const ProductZoom = () => {
        var settings2 = {
            dots: false,
            infinite: false,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        };
    
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            fade: false,
            arrows: true,
        }
    
        const goto = (index) => {
            zoomSliderBig.current.slickGoTo(index);
            zoomSlider.current.slickGoTo(index);
        }
    
        const zoomSliderBig = useRef();
        const zoomSlider = useRef();
    return (
        <div className="productZoom">
            <div className='productZoom'>
                <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
                    <div className='item'>
                        <InnerImageZoom zoomType="hover" zoomScale={1} 
                        src={'https://www.inkhub.in/cdn/shop/files/karma-round.png?v=1724997569&width=900'}/>
                    </div>
                    <div className='item'>
                        <InnerImageZoom zoomType="hover" zoomScale={1} 
                        src={'https://www.inkhub.in/cdn/shop/files/Karmic-cycle.png?v=1719313128&width=900'}/>
                    </div>
                    <div className='item'>
                        <InnerImageZoom zoomType="hover" zoomScale={1} 
                        src={'https://www.inkhub.in/cdn/shop/files/How_to_apply_54.png?v=1724314476&width=900'}/>
                    </div>
                </Slider>
            </div>
            <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                    <div className='item'>
                        <img src="https://www.inkhub.in/cdn/shop/files/karma-round.png?v=1724997569&width=900" alt='' className='w-100' onClick={() => goto(0)} />
                    </div>
                <div className='item'>
                    <img src="https://www.inkhub.in/cdn/shop/files/Karmic-cycle.png?v=1719313128&width=900" alt='' className='w-100' onClick={() => goto(1)} />
                </div>
                <div className='item'>
                    <img src="https://www.inkhub.in/cdn/shop/files/How_to_apply_54.png?v=1724314476&width=900" alt='' className='w-100' onClick={() => goto(2)} />
                </div>
            </Slider>
        </div>
    )
}

export default ProductZoom;