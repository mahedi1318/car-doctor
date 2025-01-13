import React from 'react'
import FooterLogo from "../../assets/images/footerLogo/footer-logo.png"
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoCamera } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className='bg-[#000] '>
        <div className="container">
      <div className="footer text-[#fff] p-10">
            <aside>
                <img className='w-20' src={FooterLogo} alt="" />
                <p className='w-[250px] mt-2 leading-6'>
                    Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .                
                </p>
                <div className="flex items-center justify-center gap-2 mt-2">
                    <Link className='text-[14px] w-8 h-8 bg-[#353535] rounded-full flex items-center justify-center ' to=""><FaGoogle /></Link>
                    <Link className='text-[16px] w-8 h-8 bg-[#353535] rounded-full flex items-center justify-center ' to=""><IoLogoTwitter /></Link>
                    <Link className='text-[16px] w-8 h-8 bg-[#353535] rounded-full flex items-center justify-center ' to=""><IoCamera /></Link>
                    <Link className='text-[15px] w-8 h-8 bg-[#353535] rounded-full flex items-center justify-center ' to=""><IoLogoLinkedin /></Link>
                </div>
            </aside>
            <nav>
                <h6 className="footer-title">About</h6>
                <Link to="/" className="link link-hover">Home</Link>
                <Link to="/service" className="link link-hover">Service</Link>
                <Link to="/contact" className="link link-hover">Contact</Link>                
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">Why Car Doctor</a>
                <a className="link link-hover">About</a>               
            </nav>
            <nav>
                <h6 className="footer-title">Support</h6>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Accesbility</a>
            </nav>
        </div>
        </div>
    </footer>
  )
}

export default Footer
