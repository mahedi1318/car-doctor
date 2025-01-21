import "./team.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import teamimg1 from "../../../assets/images/team/team-1.png"
import teamimg2 from "../../../assets/images/team/team-2.png"
import teamimg3 from "../../../assets/images/team/team-3.png"
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";


  const teamData = [
    {
      id: 1,
      "image": teamimg1,
      "title": "Car Engine Plug",
      "position": "Engine Expert"
    },
    {
      id: 2,
      "image": teamimg2,
      "title": "Car Engine Plug",
      "position": "Engine Expert"
    },
    {
      id: 3,
      "image": teamimg3,
      "title": "Car Engine Plug",
      "position": "Engine Expert"
    },
    {
      id: 4,
      "image": teamimg1,
      "title": "Car Engine Plug",
      "position": "Engine Expert"
    },
    {
      id: 5,
      "image": teamimg1,
      "title": "Car Engine Plug",
      "position": "Engine Expert"
    },
  ]

const TeamPart = () => {
  return (
    <div className='mb-20'>
      <div className="container">
        <div className="text-center">
            <h4 className='inter_font text-[20px] font-bold text-car-primary'>Team</h4>
            <h2 className='inter_font text-[45px] font-bold'>Meet Our Team</h2>
            <p className='inter_font text-[16px] font-normal capitalize w-[700px] m-auto leading-7 mt-3'>the majority have suffered alteration in some form,
               by injected humour, or randomised words which dont look even slightly believable. </p>
        </div>
        {/* -------------team-slider-------------------------- */}
        <div className="h-[490px] mt-10">
            <Swiper slidesPerView={3} spaceBetween={25} pagination={{ clickable: true, }} modules={[Pagination, Navigation]} navigation={true} className="mySwiper">
              {teamData?.map((item, index)=>(
                <SwiperSlide key={index}>
                    <div className="w-full border border-[#eeeeee] p-5 rounded-xl">
                      <div className="h-[290px]">
                        <img className="w-full h-full object-cover rounded-xl" src={item.image} alt="" />
                      </div>
                      <div className="mt-5">
                        <h2 className="inter_font text-[25px] font-bold">{item.title}</h2>
                        <p className="inter_font text-[20px] font-semibold mt-1 text-car-secondary">{item.position}</p>
                        <div className="mt-4">
                          <ul className="flex justify-center gap-3">
                            <li className="w-10 h-10 bg-[#395185] rounded-full flex justify-center items-center">
                              <Link className="text-[#fff]" to="/"><FaFacebookF /></Link>
                            </li>
                            <li className="w-10 h-10 text-[#fff] bg-[#55ACEE] rounded-full flex justify-center items-center">
                              <Link to="/"><FaTwitter /></Link>
                            </li>
                            <li className="w-10 h-10 text-[#fff] bg-[#0A66C2] rounded-full flex justify-center items-center">
                              <Link to="/"><FaLinkedinIn /></Link>
                            </li>
                            <li className="w-10 h-10 text-[#fff] bg-gradient-to-tr from-[#9748BE] via-[#BD4697] to-[#D8447A] rounded-full flex justify-center items-center">
                              <Link to="/"><IoLogoInstagram /></Link>
                            </li>
                          </ul>                          
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
              ))}              
            </Swiper>
        </div>
      </div>
    </div>
  )
}

export default TeamPart
