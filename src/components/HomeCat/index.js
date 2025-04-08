import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css'

const HomeCat = () => {

    const [itemBg, setItemBg] = React.useState(
        [
            '#fffceb',
            '#ecffec',
            '#feefea',
            '#fff3eb',
            '#fff3ff',
            '#f2fce4',
            '#feefea',
            '#fffceb',
            '#feefea',
            '#ecffec',
            '#feefea',
            '#fff3eb',
            '#fff3ff',
            '#f2fce4',
            '#feefea',
            '#fffceb',
            '#feefea',
            '#ecffec',
        ]
    )

    return (
    <section className="homeCat cat-container">
        <div className="container">
        <h3 class="mb-3 hd">Featured Categories</h3> 
            <Swiper
                slidesPerView={8}
                spaceBetween={8}
                navigation={true}
                slidesPerGroup={1}
                modules={[Navigation]}
                className="mySwiper"
                >
                {
                    itemBg?.map((itemBg,index) => {
                        return (
                            <SwiperSlide>
                                <div className="item text-center cursor" style={{background: itemBg}}>
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt='IMAGE'/>
                                    <h4>Item</h4>
                                    <p>10 Products</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                </Swiper>
        </div>
    </section>
  );
}
export default HomeCat;