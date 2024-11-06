import React from 'react'
import Nav from './components/Nav'
import Slider from './components/Slider'
import StoreLocator from './components/StoreLocator'
import Red from './components/Red'
import News from './components/News'
import { Footer } from './components/Footer'

const Home = () => {
  return (
    <>
    <Nav/>
     
     <Slider/>
     <StoreLocator/>
     <Red/>
     <News/>
     <Footer/>
     </>
  )
}

export default Home