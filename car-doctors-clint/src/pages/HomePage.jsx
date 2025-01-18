import React, { useContext } from 'react'
import Hero from '../components/Home/Hero/Hero'
import AboutPart from '../components/Home/About/AboutPart'
import Features from '../components/Home/CoreFeatures/Features'
import TeamPart from '../components/Home/Team/TeamPart'

const HomePage = () => {

  return (
    <>
    <div className=''>      
      <Hero />
      <AboutPart />
      <TeamPart />
      <Features />
    </div>
    </>
  )
}

export default HomePage
