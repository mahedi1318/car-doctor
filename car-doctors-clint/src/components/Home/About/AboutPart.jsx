import React from 'react'
import aboutImg1 from "../../../assets/images/about/about-1.png"
import aboutImg2 from "../../../assets/images/about/about-2.png"
import { Link } from 'react-router-dom'


const AboutPart = () => {
  return (
    <div className='mb-20'>
      <div className="container">
        <div className="grid grid-cols-2 gap-14">
            {/* ------------about-left-img-part----------- */}
            <div className="w-full h-[550px] relative">
                <div className="w-[89%] h-[460px]">
                    <img className='w-full h-full object-cover rounded-xl' src={aboutImg1} alt="" />
                </div>
                <div className="w-[60%] h-[330px] absolute bottom-0 right-0">
                    <img className='w-full h-full object-cover' src={aboutImg2} alt="" />
                </div>
            </div>
            {/* ------------about-right-details-part----------- */}
            <div className="w-full h-[550px]">
                <div className="">
                    <h3 className='inter_font text-[20px] font-bold text-car-primary'>About Us</h3>
                    <h1 className='inter_font text-[45px] font-bold w-[365px] leading-[60px] mt-6'>We are qualified & of experience in this field</h1>
                    <p className='inter_font text-[16px] font-normal mb-5 mt-7 leading-8 capitalize'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
                        by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='inter_font text-[16px] font-normal  leading-8 capitalize'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button to="" className="inter_font text-[18px] font-semibold btn btn-lg border-car-primary bg-car-primary hover:bg-car-primary text-car-info rounded-md mt-10">Get More Info</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPart
