import { Link } from "react-router-dom"
import "./AboutContentstyles.css"
import recat from "../assets/recat.jpg"
import recat22 from "../assets/recat22.jpg"


import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a react front-end developer. I create responsive secure websites for my clients. </p>
       <Link to="/contact"> 
       <button className="btn btn-hover">Contact</button>
        </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={recat} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={recat22} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent