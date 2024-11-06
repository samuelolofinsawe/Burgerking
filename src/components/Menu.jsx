import React from 'react'
import Nav from './Nav'
import {Footer} from './Footer'
import bigkingxxl from '../menuImages/bigkingxxl.jpg'
import doublesteakhouse from '../menuImages/double-steakhouse.jpg'
import whopperjr from '../menuImages/whopper-jr.jpg'
import cheeseburger from '../menuImages/chesseburger.jpg'
import whopper from '../menuImages/whopper.jpg'
import steakhouse from '../menuImages/steakhouse.jpg'
import doublecheeseburger from '../menuImages/double-cheese-burger.jpg'
import hamburger from '../menuImages/hamburger.jpg'
import doublewhopper from '../menuImages/double-whopper.jpg'
import bigking from '../menuImages/big-king.jpeg'
import chickencrisp from '../menuImages/chicken-crisp.jpg'
import kingfillet from '../menuImages/king-fillet.png'
import MenuSectionCard from './MenuSectionCard'
import chickenroyale from '../menuImages/chicken-royale.jpg'
import plantaincubes from '../menuImages/plantain-cubes.png'
import potatocubes from '../menuImages/potato-cubes.png'
import yamfries from '../menuImages/yam-fries.png'
import chickenwings from '../menuImages/chicken-wings.jpg'
import cheesybites from '../menuImages/cheesy-bites.jpg'
import chickennuggets from '../menuImages/chicken-nuggets.jpg'
import onionrings from '../menuImages/onion-rings.jpg'
import bkfries from '../menuImages/bk-fries.jpg'
import evawater from '../menuImages/eva-water.jpg'
import sprite from '../menuImages/sprite.jpg'
import coke from '../menuImages/coke.jpg'
import caramelsundae from '../menuImages/caramel-sundae.jpg'
import strawberrysundae from '../menuImages/strawberry-sundae.jpg'
import chocolatesundae from '../menuImages/chocolate-sundae.jpg'
import kitkatfusion from '../menuImages/kit-kat-fusion.jpg'
import { Link } from 'react-scroll'
import ActiveLastBreadcrumb from './ActiveLastBreadCrumb'

const Menu = () => {
    const sectionData = [
        {
          id:"flameGrilled",
          sectionName: "Flame Grilled Burgers",
          items: [
            { name: "Whopper", image: whopper},
            { name: "Steakhouse", image:steakhouse},
            {name:'Big King',image:bigking},
            {name:"Double whooper",image:doublewhopper},
            {name:"Double steakhouse",image:doublesteakhouse},
            {name:"Bing King xl",image:bigkingxxl},
            {name:'Whooper Jr',image:whopperjr},
            {name:"Cheeseburger",image:cheeseburger},
            {name:"Hamburger",image:hamburger},
            {name:"Double Cheeseburger",image:doublecheeseburger}

          ],
        },
        {
          id:"chickenBurger",
          sectionName: "Chicken Burgers",
          items: [
            { name: "Chicken royale", image:chickenroyale},
            {name:"King Fillet",image:kingfillet},
            {name:"Chicken Crisp",image:chickencrisp}
            
          ],
        },
        {
          id:"sides",
          sectionName: "Sides",
          items: [
            {name:"Plantain Cubes", image:plantaincubes},
            {name:"Potato Cubes", image:potatocubes},
            {name:"Yam Fries", image:yamfries},
            {name:"Chicken Wings", image:chickenwings},
            {name:"Cheesy Bites", image:cheesybites},
            {name:"Chicken Nuggets", image:chickennuggets},
            {name:"Onion Rings", image:onionrings},
            {name:"BK Fries", image:bkfries},


          ],
        },
        {
          id:"drinks",
          sectionName: "Drinks",
          items: [
            
            {name:"Eva water", image:evawater},
            {name:"Sprite", image:sprite},
            {name:"Coke", image:coke},
          ],
        },
        {
          id:"desserts",
          sectionName: "Desserts",
          items: [
            
            {name:"Caramel Sundae", image:caramelsundae},
            {name:"Strawberry Sundae", image:strawberrysundae},
            {name:"Chocolate Sundae", image:chocolatesundae},
            {name:"Kit Kat Fusion",image:kitkatfusion}
            
          ],
        }
        
      ];
  return (
    <div style={{backgroundColor:'#f5e9d9'}}>
        <div>
          

      <div style={{backgroundColor:'#f5e9d9',position:'fixed'}}>
      <Nav/>
      <nav className="navbar-menu">
        <Link to="flameGrilled">Flame Grilled Burgers</Link>
        <Link to="chickenBurger" offset={-120}>Chicken Burgers</Link>
        <Link to="sides" offset={-120}>Sides</Link>
        <Link to="drinks" offset={-120}>Drinks</Link>
        <Link to="desserts" offset={-120}>Desserts</Link>
      </nav>
        </div>
      <div className='menu-body'>
        
      <ActiveLastBreadcrumb/>
      {sectionData.map((section) => (
        
        <div id={section.id} key={section.id}>
          <MenuSectionCard
          key={section.section}
          sectionName={section.sectionName}
          items={section.items}
        />
        </div>
      ))}
      </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Menu

