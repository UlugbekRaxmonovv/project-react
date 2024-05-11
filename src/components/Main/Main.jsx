import React from 'react';
import './Main.css'
import rasm1 from '../../assets/img/main.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Main = () => {
    return (
        <div className='container'>
            <div className="main">
                <div className="main-all">
                    <h1>Biz qurilishda taraqqiyotni ilhomlantiramiz.</h1>
                    <div className="main-row">
                    <div className="main_list">
                             <h5>SHNQ</h5>
                            <p>Shaharsozlik normalari va qoidalari</p>
                        </div>
                        <div className="main_list">
                             <h5>Standartlar</h5>
                            <h4>Texnik jihatdan tartib solish sohasidagi normativ hujjatlar</h4>
                            
                        </div>
                    </div>
                </div>
                <div className="main-all">
                <div className="swipir">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='img'> <img  src={rasm1} alt="" /></SwiperSlide>
        <SwiperSlide className='img' > <img src={rasm1} alt="" /></SwiperSlide>
        <SwiperSlide className='img'> <img src={rasm1} alt="" /></SwiperSlide>
      </Swiper>
      </div>
                    
                </div>
            </div>


    
        </div>
    );
}

export default Main;
