import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Swiper from 'swiper'
import Slider from './components/Slider'

import StoreLocator from './components/StoreLocator'
import News from './components/News'
import Red from './components/Red'
import { Footer } from './components/Footer'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import { Order } from './components/Order'
import Menu from './components/Menu'
import Restaurants from './components/Restaurants'
import { Offers } from './components/Offer'
import { Career } from './components/Career'
import { NewsPage } from './components/NewsPage'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/order',
    element:<Order/>
  },
  {
    path:'/menu',
    element:<Menu/>
  },
  {
    path:'/restaurants',
    element:<Restaurants/>
  },
  {
    path:'/offers',
    element:<Offers/>
  },
  {
    path:'/careers',
    element:<Career/>
  },
  {
    path:'/news',
    element:<NewsPage/>
  }
  
])
function App() {
  return <RouterProvider router={router}/>
}

export default App
