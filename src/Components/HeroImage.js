import "./heroimage.css"
import introImage from '../assets/homepage.jpg'
import React from 'react'
import { Link } from "react-router-dom"

const HeroImage = () => {
  return (
    <div className="hero" >
        <div className="mask" >
            <img className="introimg" src={introImage} alt="intro" />
        </div>
        <div className="content" >
            <p>Hi, I'm a Front-End Developer</p>
            <h1>React Developer.</h1>
            <div>
                <Link to='/Project' className="btn">Projects</Link>
                <Link to='/Contact' className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage