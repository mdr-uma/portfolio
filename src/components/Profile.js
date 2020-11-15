import React from 'react'
import Button from './Button'
import image from '../images/uma.JPG'

const Profile = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="intro-message">
                        <h3>Hi, I’m Uma Manandhar.</h3>
                        <h4>I am a Full-stack Web Developer.</h4>
                        <h5>My expertise are Ruby and JavaScript.</h5>
                        <Button />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="intro">
                        <img src={image} alt="" className="shadow"/>
                        <a href="https://twitter.com/imoohma"><i className="fab fa-twitter-square shadow animate__animated animate__bounceInDown" id="twitter"></i></a>   
                        <a href=" https://github.com/mdr-uma"><i className="fab fa-github-square shadow animate__animated animate__bounceInDown" id="git"></i></a>
                        <a href="https://www.linkedin.com/in/uma-manandhar"><i className="fab fa-linkedin shadow animate__animated animate__bounceInDown" id="linkedin"></i></a>
                    </div >
                    <div className="img-background shadow">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile