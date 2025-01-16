import React, { useContext } from 'react'
import Hero from '../components/Home/Hero/Hero'
import AuthProvider from '../authProvider/AuthProvider'
import { AuthContext } from '../ContextApi'

const HomePage = () => {

  const {name} = useContext(AuthContext)

  return (
    <>
    <div className=''>
      <h1>{name}</h1>
      <Hero />
    </div>
    </>
  )
}

export default HomePage
