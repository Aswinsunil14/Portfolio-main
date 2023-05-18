import "./footerstyle.css"
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
 
import React from 'react'
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer" >
        <div className="footer-container" >
            <div className="left" >
                <div className="location" >
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <div>
                        <p> Poikayil House <br />
                        Mulakuzha P.O <br />
                        Chengannur, Alappuzha <br/>
                        Kerala           
                        </p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
                +91 8075213561
                    </h4>
                </div>
                <div className="phone">
                    <h4>
                <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
                aswinsunil14@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right" >
                <h4> About Me</h4>
                <p> 
                    This is me Aswin Sunil. I am completely a fresher in this field.
                I enjoy discussing new projects and design challenges.
                </p>
                <div className="social" >
                    <NavLink to="https://www.facebook.com/nandu1998/" >
                    <FaFacebook 
                    size={30}
                    style={{color: "#fff", marginRight: "1rem" }}
                    />
                    </NavLink>

                    <NavLink to="https://twitter.com/aswinsunil14">
                    <FaTwitter 
                    size={30}
                    style={{color: "#fff", marginRight: "1rem" }}
                    />
                    </NavLink >

                    <NavLink to="https://www.linkedin.com/in/aswin-sunil-597aa318b/" >
                    <FaLinkedin
                    size={30}
                    style={{color: "#fff", marginRight: "1rem" }}
                    />
                    </NavLink>

                    <NavLink to="https://github.com/Aswinsunil14">
                        <FaGithub 
                        size={30}
                        style={{color: "#fff", marginRight: "1rem" }}
                        />
                    </NavLink>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer