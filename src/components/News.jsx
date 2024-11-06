import React from 'react'
import image1 from '../assets/meet-the-long-kings.jpg'
import image2 from '../assets/New-Sides-Intro-Blog-1.jpg'
import image3 from '../assets/Artboard-15-20.jpg'
import Card from './Card'
const News = () => {
    const CardList =[
        {
            id:1,
            image:image1,
            alt:'image',
            title:'WHAT’S BETTER THAN ONE KING?',
            content:'Burger King is now Grilling in Nigeria and the Whopper has a new home',
            link:'https://www.burger-king.ng/news/whats-better-than-one-king/',
        },
        {
            id:2,
            image:image2,
            alt:'image',
            title:'NEW SLIDES ALERT?',
            content:'Burger King has introduced NEW SIDES to the BK SIDES GENG',
            link:'https://www.burger-king.ng/news/new-sides-alert/',

        },
        {
            
                id:3,
                image:image3,
                alt:'image',
                title:'BudgEat Menu Is Back',
                content:'BudgEat Menu Is Back! Ball on a BudgEat only at Burger',
                link:'https://www.burger-king.ng/news/',
    
            
        }
        
    ]

  return (
    <div className='news-title'>
        <h2 className='News'>News</h2>
        <div className='card'>
        {CardList.map((card,index)=>(
           <Card title={card.title} image={card.image} content={card.content} link={card.link} key={index}/> 
        ))}
        </div>
    </div>
  )
}

export default News