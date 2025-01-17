import React, { useContext } from 'react'
import Hero from '../components/Home/Hero/Hero'
import AuthProvider from '../authProvider/AuthProvider'
import { AuthContext } from '../ContextApi'
import AboutPart from '../components/Home/About/AboutPart'

const HomePage = () => {

  const {name} = useContext(AuthContext)

  return (
    <>
    <div className=''>
      <h1>{name}</h1>
      <Hero />
      <AboutPart />
    </div>
    </>
  )
}

export default HomePage
