import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/logo.png'

const NavBar = () => {
    return (
        <div id="app" className="container">
            <nav className="navbar navbar-expand-md navbar-light bg-light justify-content">
                <a className="navbar-brand" href="#"><img src={image} alt="logo" className="logo"/></a>
                <button className="btn btn-success ml-auto mr-1">Home</button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportContent">
                    <ul className="navbar-nav text-right">    
                        <li className="nav-item">
                            <Link style={{color:"darkred"}} className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <a style={{color:"darkred"}}className="nav-link" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a style={{color:"darkred"}}className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a style={{color:"darkred"}}className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a style={{color:"darkred"}}className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
