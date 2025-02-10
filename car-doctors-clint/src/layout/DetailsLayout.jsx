import React from 'react'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const DetailsLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="container">
            <div className='grid grid-cols-12 gap-3'>
                <article className='col-span-9'>
                    <Outlet />
                </article>
                <aside className='col-span-3'>
                    <div className="bg-car-secondary min-h-screen">ads</div>
                </aside>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default DetailsLayout
