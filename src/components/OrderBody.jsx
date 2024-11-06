import React from 'react'
import OrderImage from '../assets/homeImage_6698d1b71eb46.jpg'
import { Order } from './Order'
import Modal from './Modal'
import { Footer } from './Footer'
import News from './News'

const OrderBody = () => {
  return (
    <div className='order-body'>
        <Modal/> 
        <News/>
        <Footer/>
    </div>
  )
}

export default OrderBody