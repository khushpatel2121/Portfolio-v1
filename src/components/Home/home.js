import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import { AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'
import {FaReact,FaNodeJs} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {AiFillHtml5,AiOutlineArrowRight} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import Button from '../button/button'
import background from "../images/casey-horner-O0R5XZfKUGQ-unsplash.jpg"
function Home() {


   const [isIcon, setIcon] = useState(false);

   function HandleClick() {
      setIcon(!isIcon);
   }

   return (
      <>
         <div className='home-wrapper'>
       
         <img src={background} className='bg-img'/>

            <div className='info'>
               <p> I'm</p>
               <h1>Khush Patel</h1>
               <p> a web developer</p>
             <Link  className='btn-link' to='/'><button className='btn'>Work with me <AiOutlineArrowRight className='icon'/></button></Link>
            </div>
            <div className='skills' >
               <div className='title' onClick={HandleClick}>
                  <h1>Skills</h1>
                  <p > {isIcon ?   <AiOutlineArrowDown />: <AiOutlineArrowUp />} </p>
               </div>
               <div className={isIcon? 'skills-close': 'Skill-info'}>
                  <ul>
                     <li>
                        <FaReact/>  React
                     </li>
                     <li>
                        <SiJavascript/> Javascript
                     </li>
                     <li>
                        <AiFillHtml5/> HTML
                     </li>
                     <li>
                        <FaNodeJs/> Node.js
                     </li>
                     <li>
                     <IoLogoCss3/> CSS
                     </li>
                    
                  </ul>
               </div>
            </div>
         


         </div>
      </>
   )
}

export default Home;
