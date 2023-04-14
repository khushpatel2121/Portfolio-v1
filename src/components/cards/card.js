import React from 'react'
import './card.css'
import image from '../images/casey-horner-O0R5XZfKUGQ-unsplash.jpg'
import {AiFillGithub} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <div className='c-wrapper'>
    <div className='img-card'>
<img  className='card-image' src={props.image} width='300px' height='100px'></img>
    </div>
      <div className='c-title'>
        <h1>{props.title}</h1>
      </div>
      <div className='c-link'>
   <a href={props.link}><AiFillGithub/>Source Code</a>
      </div>
    </div>
  )
}


export default Card
