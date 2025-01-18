import React from 'react'
import "./team.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

const TeamPart = () => {
  return (
    <div className='mb-20'>
      <div className="container">
        <div className="text-center">
            <h4 className='inter_font text-[20px] font-bold text-car-primary'>Team</h4>
            <h2 className='inter_font text-[45px] font-bold'>Meet Our Team</h2>
            <p className='inter_font text-[16px] font-normal capitalize w-[700px] m-auto leading-7 mt-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
        {/* -------------team-slider-------------------------- */}
        <div className="h-[490px] mt-10">
            <Swiper slidesPerView={3} spaceBetween={25} pagination={{ clickable: true, }} modules={[Pagination, Navigation]} navigation={true} className="mySwiper">
                <SwiperSlide>
                    <div className="w-full h-full bg-car-primary"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full bg-car-review"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full bg-car-primary"></div>
                </SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>              
                <SwiperSlide>Slide 5</SwiperSlide>              
                <SwiperSlide>Slide 5</SwiperSlide>              
                <SwiperSlide>Slide 5</SwiperSlide>              
            </Swiper>
        </div>
      </div>
    </div>
  )
}

export default TeamPart
