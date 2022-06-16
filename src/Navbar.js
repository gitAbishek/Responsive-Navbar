
import {FaFacebook} from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin} from "react-icons/fa"
import { GiHamburgerMenu} from "react-icons/gi"
import { useState } from "react"
import {NavLink} from "react-router-dom"
 

const Navbar = () =>{
    const [showMediaIcons,setShowMediaIcons] = useState(false)
    return (
        <>
            <div className="navbar">
                 <div className="logo">
                    <p className="logo_title">Abishek Shah</p>
                 </div>

                 
                    <div className="nav">
                        <ul className={showMediaIcons ? "desktop_nav mobile_nav" : "desktop_nav"}>
                            <li><NavLink className="a" exact={true} 
                               to="/">Home</NavLink></li>
                            <li><NavLink className="a" exact={true} 
                               to="/about">About</NavLink></li>
                            <li><NavLink className="a" exact={true} 
                               to="/project">Project</NavLink></li>
                            <li><NavLink className="a" exact={true} 
                               to="/services">Services</NavLink></li>
                            <li><NavLink className="a" exact={true} 
                               to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>

                    <div className="social_media">
                        <ul className="social_menu">
                            <li><NavLink className="aa" to="#"  target="_blank"><FaFacebook/></NavLink></li>
                            <li><NavLink className="aa" to="#"  target="_blank"><FaInstagram/></NavLink></li>
                            <li><NavLink className="aa" to="#"  target="_blank"><FaLinkedin/></NavLink></li>
                        </ul>
                    
                    <div className="hambergermenu">
                        <NavLink to="#" className="ham_icon"
                        onClick={() => setShowMediaIcons(!showMediaIcons)}
                        ><GiHamburgerMenu/></NavLink>
                       
                    </div>
                    </div>
                 
            </div>
        </>
    )
}

export default Navbar
