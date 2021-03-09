import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/LOGO.jpg'

const NavBar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light bg-light d-flex justify-content-between">
                <div>
                <a href="/"><img src={image} alt="logo" className="logo animate__animated animate__tada"/></a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                <Link className="btn btn-success" to="/">Home</Link>
                    <ul className="navbar-nav text-center">    
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
