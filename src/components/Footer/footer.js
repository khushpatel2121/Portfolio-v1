import React from 'react'
import { useState, useEffect } from 'react';
import Profile from "../images/khush.png";
import {AiFillTwitterCircle,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import './footer.css'
import { Link } from 'react-router-dom';


function Footer() {
  


const dates = new Date().getFullYear();
setInterval(updateTime,1000);
 const Time = new Date().toLocaleTimeString();
 
 const [time,setTime] = useState(Time);

function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
}

  return (
 <>
 <div className='footer'>
    <div className='image' >
        <img  className="Profile" src={Profile} alt='profile-photo' width='50px' height='50px' />
        <Link to='/' className='link'>Khush Patel.</Link>
    </div>

<div className='copy'>
    <h1>@ Copy Rights</h1>
    <p>{time}</p>
    <p>{dates}</p>  
</div>


<div className='logos'>
   <a href='https://github.com/' target='_Blank'><AiFillGithub/></a>
   <a href='https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.127961666300_crid.601257986824_kw.www%20linkedin_d.c_tid.kwd-2246447582_n.g_mt.e_geo.9061732&mcid=6844056167778418689&cid=&gclid=Cj0KCQiAm5ycBhCXARIsAPldzoVE0a8qZE7QU8pkHPNwP6EcP_xe5yAI7bQGo9L1C8N_9L5WfhlHBxoaAkPFEALw_wcB&gclsrc=aw.ds'  target='_Blank'><AiFillLinkedin/></a>
   <a href='https://twitter.com/Khush6547'  target='_Blank'><AiFillTwitterCircle/></a>
    </div>
    </div>
 </>
  );
}

export default Footer
