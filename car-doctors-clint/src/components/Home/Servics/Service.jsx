import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Service = () => {

  const [service, setService] = useState([])

  useEffect(()=>{
    try {
      axios.get("https://car-doctor-server-nine-delta-13.vercel.app/cars").then((res)=>{
        console.log(res.data.length)
        if(res.data){
          setService(res.data.splice(0, 6))
        }
      })
    } catch (error) {
      console.log(error)
    }
    
  },[])

  return (
    <div className="">
      <div className='container'>
        <div className="text-center">
          <span className='inter_font font-bold text-[20px] text-[#FF3811]'>Service</span>
          <h2 className='inter_font font-bold text-[45px] text-[#151515]'>Our Service Area</h2>
          <p className='inter_font text-[16px] font-normal w-[700px] m-auto capitalize text-[#737373] mt-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-10">
          {service.map((item)=>(
            <div key={item._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <Link to={`/details/${item._id}`}>
                    <button className="btn btn-primary">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Service
