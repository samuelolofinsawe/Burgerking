import React from 'react'
import listimg1 from '../assets/dineinIcon.svg'
import listimg2 from '../assets/deliveryIcon.svg'
import listimg3 from '../assets/takeoutIcon.svg'
const Modal = () => {
  return (
    <div class="modal">
        <h2 class="modal-title">What would you like?</h2>
        <div class="options">
            <div class="option">
            <img src={listimg1}/>
            <span>Dine-in Pickup</span>
            </div>
            <div class="option">
            <img src={listimg3}/>
            <span>Takeout</span>
            </div>
            <div class="option">
            <img src={listimg2}/>
            <span>Delivery</span>
            </div>
        </div>
    </div>

  )
}

export default Modal