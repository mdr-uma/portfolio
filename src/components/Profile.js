import React from 'react'
import Button from './Button'
import image from '../images/uma.JPG'

const Profile = () => {
    return (
        <div className="intro">
            <h3>Hi, I’m Uma Manandhar.</h3>
            <h4>I am a Full-stack Web Developer.</h4>
            <h5>My expertise are Ruby and JavaScript.</h5>
            <Button />
            <img src={image} alt=""/>
        </div>
    )
}

export default Profile