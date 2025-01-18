import React from 'react'
import image1 from "../../../assets/images/feature/f-1.png"
import image2 from "../../../assets/images/feature/f-2.png"
import image3 from "../../../assets/images/feature/f-3.png"
import image4 from "../../../assets/images/feature/f-4.png"
import image5 from "../../../assets/images/feature/f-5.png"
import image6 from "../../../assets/images/feature/f-6.png"


    const coreData = [
        {
            id: 1,
            "title": "Expert Team",
            "image": image1
        },
        {
            id: 2,
            "title": "Expert Team",
            "image": image6
        },
        {
            id: 3,
            "title": "Expert Team",
            "image": image3
        },
        {
            id: 4,
            "title": "Expert Team",
            "image": image4
        },
        {
            id: 5,
            "title": "Expert Team",
            "image": image5
        },
        {
            id: 6,
            "title": "Expert Team",
            "image": image6
        },
    ]

const Features = () => {
  return (
    <div className='mb-8'>
      <div className="container">
        <div className="text-center">
            <h4 className='inter_font text-[20px] font-bold text-car-primary'>Core Features</h4>
            <h2 className='inter_font text-[45px] font-bold'>Why Choose Us</h2>
            <p className='inter_font text-[16px] font-normal capitalize w-[700px] m-auto leading-7 mt-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
        <div className="grid grid-cols-6 gap-6 mt-8 text-center">
                {coreData?.map((item, index)=>(
                    <div key={index.id} className="px-5 py-7 border border-[#E8E8E8] rounded-md hover:bg-car-primary duration-500 transition-all group">                    
                        <img className='m-auto mb-5 group-hover:bg-car-info duration-500 transition-all' src={item.image} alt="" />
                        <span className='inter_font text-[18px] font-bold text-[#444] group-hover:text-[#fff] duration-500 transition-all'>Expert Team</span>
                    </div>
                ))}
            </div>            
        </div>
      </div>    
  )
}

export default Features
