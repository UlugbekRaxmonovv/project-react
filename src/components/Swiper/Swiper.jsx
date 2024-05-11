import React from 'react';
import './Swiper.css'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Swipers = () => {
    return (
        <div>
           <section className='Swiper'>
             <div className="container">
                <div className="swiperr">
                    <div className="wiper-all">
                    <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="mySwiper-all">
            <div className="mySwiper-row">
                    <h1>Muhokamalar</h1>
                    <p>Iyul 15-25, 2023</p>
                </div>
                <div className="mySwiper-row">
                    <div className="wik"></div>
                </div>
                <div className="mySwiper-row">
                    <h2>ShNK 1.02.07-19 - Qurilish uchun muhandislik-texnik izlanishlar. Asosiy qoidalar</h2>
                  <h5>Shaharsozlik normalari va qoidalariga kiritilayotga o‘zgartirishlarga o‘z fikringizni bildiring, muhokalarda ishtirok eting!</h5>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="mySwiper-all">
            <div className="mySwiper-row">
                    <h1>Muhokamalar</h1>
                    <p>Iyul 15-25, 2023</p>
                </div>
                <div className="mySwiper-row">
                    <div className="wik"></div>
                </div>
                <div className="mySwiper-row">
                    <h2>ShNK 1.02.07-19 - Qurilish uchun muhandislik-texnik izlanishlar. Asosiy qoidalar</h2>
                  <h5>Shaharsozlik normalari va qoidalariga kiritilayotga o‘zgartirishlarga o‘z fikringizni bildiring, muhokalarda ishtirok eting!</h5>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="mySwiper-all">
            <div className="mySwiper-row">
                    <h1>Muhokamalar</h1>
                    <p>Iyul 15-25, 2023</p>
                </div>
                <div className="mySwiper-row">
                    <div className="wik"></div>
                </div>
                <div className="mySwiper-row">
                    <h2>ShNK 1.02.07-19 - Qurilish uchun muhandislik-texnik izlanishlar. Asosiy qoidalar</h2>
                  <h5>Shaharsozlik normalari va qoidalariga kiritilayotga o‘zgartirishlarga o‘z fikringizni bildiring, muhokalarda ishtirok eting!</h5>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
                    </div>
                </div>
             </div>

            </section> 
        </div>
    );
}

export default Swipers;
