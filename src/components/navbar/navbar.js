import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import {GrProjects,GrCircleInformation} from 'react-icons/gr'
import {BsCodeSquare} from 'react-icons/bs'
import {MdPermContactCalendar} from 'react-icons/md'

function Navbar() {
  return (
<nav>
  <div className='wrapper'> 
    <div className='navlogo'>
<Link className='firstName' to='/'>
  Khush
</Link>
<Link className='secondName' to='/'>
  Patel.
</Link>

    </div>
    <div className='nav-menu'>
<ul>
  <li>
    <Link className='nav-links' to='/projects'><BsCodeSquare className='icon'/> My Projects</Link>
  </li>
  <li>
    <Link className='nav-links' to='/'> <MdPermContactCalendar className='icon'/> Contact Me </Link>
  </li>
  <li>
    <Link className='nav-links' to='/'> <GrCircleInformation  className='icon'/> About Me </Link>
  </li>
</ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
