import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./hero.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import heroImg1 from "../../../assets/images/hero/hero-1.jpg"
import heroImg2 from "../../../assets/images/hero/hero-2.jpg"
import heroImg3 from "../../../assets/images/hero/hero-3.jpg"
import { Link } from 'react-router-dom';


const Hero = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

  return (
    <div className='h-[700px] mb-20'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="relative h-[700px]">
                <img src={heroImg2} alt="" />
                <div className="bg-[rgba(0,0,0,0.5)] w-full h-full absolute top-0 left-0 text-left   flex items-center">
                    <div className="text-[#fff] container">
                        <h1 className='inter_font text-[60px] font-bold w-[600px] leading-[70px]'>Affordable Price For Car Servicing</h1>
                        <p className='inter_font text-[18px] font-normal w-[480px] mt-8 leading-8'>There are many variations of passages of  available,
                         but the majority have suffered alteration in some form</p>
                         <div className="space-x-5 mt-7">
                         <Link to="" className="inter_font text-[18px] font-semibold btn btn-md bg-transparent border-car-info hover:border-car-primary text-car-info hover:bg-car-primary
                          hover:text-[#fff] duration-500 transition-all rounded-md">Discover More</Link>
                         <Link to="" className="inter_font text-[18px] font-semibold btn btn-md bg-transparent border-car-info hover:border-car-primary text-car-info hover:bg-car-primary
                          hover:text-[#fff] duration-500 transition-all rounded-md">Latest Project</Link>
                         </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative h-[700px]">
                <img src={heroImg1} alt="" />
                <div className="bg-[rgba(0,0,0,0.5)] w-full h-full absolute top-0 left-0 text-left   flex items-center">
                    <div className="text-[#fff] container">
                        <h1 className='inter_font text-[60px] font-bold w-[600px] leading-[70px]'>Affordable Price For Car Servicing</h1>
                        <p className='inter_font text-[18px] font-normal w-[480px] mt-8 leading-8'>There are many variations of passages of  available,
                         but the majority have suffered alteration in some form</p>
                         <div className="space-x-5 mt-7">
                         <Link to="" className="inter_font text-[18px] font-semibold btn btn-md bg-transparent border-car-info hover:border-car-primary text-car-info hover:bg-car-primary
                          hover:text-[#fff] duration-500 transition-all rounded-md">Discover More</Link>
                         <Link to="" className="inter_font text-[18px] font-semibold btn btn-md bg-transparent border-car-info hover:border-car-primary text-car-info hover:bg-car-primary
                          hover:text-[#fff] duration-500 transition-all rounded-md">Latest Project</Link>
                         </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative h-[700px]">
                <img src={heroImg3} alt="" />
                <div className="bg-[rgba(0,0,0,0.5)] w-full h-full absolute top-0 left-0 text-left   flex items-center">
                    <div className="text-[#fff] container">
                        <h1 className='inter_font text-[60px] font-bold w-[600px] leading-[70px]'>Affordable Price For Car Servicing</h1>
                        <p className='inter_font text-[18px] font-normal w-[480px] mt-8 leading-8'>There are many variations of passages of  available,
                         but the majority have suffered alteration in some form</p>
                         <div className="space-x-5 mt-7">
                         <Link to="" className="inter_font text-[18px] font-semibold btn btn-md bg-transparent border-car-info hover:border-car-primary text-car-info hover:bg-car-primary
                          hover:text-[#fff] duration-500 transition-all rounded-md">Discover More</Link>
                         <Link to="" className="inter_font text-[18px] font-semibold btn btn-md bg-transparent border-car-info hover:border-car-primary text-car-info hover:bg-car-primary
                          hover:text-[#fff] duration-500 transition-all rounded-md">Latest Project</Link>
                         </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>     
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}

export default Hero
