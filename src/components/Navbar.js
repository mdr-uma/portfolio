import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import image from '../images/portfolio-logo.png'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container d-flex justify-content-space-between">
                <div>
                    <Link to="/" onClick={() => scroll.scrollToTop()}>
                        <img src={image} alt="logo" className="logo animate__animated animate__tada"/>
                    </Link>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                    <ul className="navbar-nav text-center">  
                        <li className="nav-item">
                            <Link className="nav-link" to="about" smooth={true} duration={1000}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="skills" smooth={true} duration={1000}>Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="projects" smooth={true} duration={1000}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="blog" smooth={true} duration={1000}>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact" smooth={true} duration={1000}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
