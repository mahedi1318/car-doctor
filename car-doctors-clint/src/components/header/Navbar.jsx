import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../../assets/images/logo/logo.png"
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {

    let optionLink = (
        <>
            <li>
                <NavLink className="inter_font text-[16px] font-semibold" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="inter_font text-[16px] font-semibold" to="/about">About</NavLink>
            </li>
            <li>
                <NavLink className="inter_font text-[16px] font-semibold" to="/service">Service</NavLink>
            </li>
            <li>
                <NavLink className="inter_font text-[16px] font-semibold" to="/blog">Blog</NavLink>
            </li>
            <li>
                <NavLink className="inter_font text-[16px] font-semibold" to="/contact">Contact</NavLink>
            </li>
        </>
    )

  return (
    <div className=' container'>
      <div className="navbar bg-base-100 my-5">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {optionLink}
            </ul>
            </div>
            <Link to="" className="btn btn-ghost text-xl">
                <img className='w-14' src={Logo} alt="Logo is not supported" />
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-3">
                {optionLink}
            </ul>
        </div>
        <div className="navbar-end space-x-5 cursor-pointer">
            <Link className='btn' to="/login">Login</Link>
            <Link className='btn' to="/register">Register</Link>
            <span className='text-[25px]'><HiOutlineShoppingBag /></span>
            <span className='text-[30px]'><IoIosSearch /></span>
            <Link to="" className="btn btn-md border-car-primary text-car-primary rounded-none hover:bg-car-primary hover:text-[#fff] duration-500 transition-all">Appointment</Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar
