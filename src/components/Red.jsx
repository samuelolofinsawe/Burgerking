import React from 'react'
import Phone from '../assets/burgerphone.png'
import GooglePlay from '../assets/google-play.png'
import AppStore from '../assets/app-store.png'
const Red = () => {
  return (
    <div className='news-div'>
        <div>
            <img src={Phone} className='phone'/>
        </div>
        <div style={{backgroundColor:'#d72300',fontSize:'57px',color:'white',marginTop:'30px',paddingRight:'30px',paddingLeft:'40px',width:'600px'}}>
        <div style={{backgroundColor:'#d72300',marginBottom:'25', wordSpacing:'-15px'}}>
        Download our app and discover the incredible<br/> offers we have for you!
        </div>
        <div style={{backgroundColor:'#d72300',display:'flex'}}>
            <img src={GooglePlay} style={{backgroundColor:'#d72300',width:'130px',height:'40px'}}/>
            <img src={AppStore} style={{backgroundColor:'#d72300',width:'130px',height:'40px'}}/>
        </div>
        <p style={{backgroundColor:'#d72300',fontSize:'12px',marginTop:'10px'}}>Apple and the Apple logo are trademarks of Apple Inc., registered in the US and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms and Conditions apply.</p>

        </div>
        
    </div>
  )
}

export default Red