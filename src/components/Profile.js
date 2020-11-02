import React from 'react'
import Button from './Button'
import image from '../images/uma.JPG'
import { Twitter, GitHub, Linkedin } from 'react-feather'

const Profile = () => {
    return (
        <>
        <div className="text-left">
            <h3>Hi, I’m Uma Manandhar.</h3>
            <h4>I am a Full-stack Web Developer.</h4>
            <h5>My expertise are Ruby and JavaScript.</h5>
            <Button />
        </div>
        <div className="intro">
            <img src={image} alt=""/>
        </div >
        <div className="img-background">
            <Twitter id="twitter"/>
            <GitHub id="git"/>
            <Linkedin id="linkedin"/>
        </div>
        </>
    )
}

export default Profile