import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css'

const HomeCat = () => {

    const [itemBg] = React.useState(
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
  spaceBetween={8}
  navigation={true}
  slidesPerGroup={1}
  modules={[Navigation]}
  className="mySwiper"
  breakpoints={{
    0: {
      slidesPerView: 2.2, // mobile
    },
    480: {
      slidesPerView: 3.5, // small phones / large mobiles
    },
    768: {
      slidesPerView: 5, // tablets
    },
    1024: {
      slidesPerView: 6, // small desktops
    },
    1280: {
      slidesPerView: 8, // full desktop
    },
  }}
>
                {
                    itemBg?.map((itemBg) => {
                        return (
                            <SwiperSlide>
                                <div className="item text-center cursor" style={{background: itemBg}}>
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt=''/>
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