import React, { useState } from 'react'
import image from '../images/uma.JPG'
const Profile = () => {
    const [info, setInfo] = useState(null)
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="intro-message">
                        <h3>Hi, I’m Uma Manandhar.</h3>
                        <h4>I am a Full-stack Web Developer.</h4>
                        <h5>My expertise are Ruby on Rails, JavaScript and React.</h5>
                        <button className="btn btn-success ml-auto mr-1" onClick={() => setInfo(!info)}>Contact Info</button>
                        {info ? 
                            <div className="info">
                                <i className="fas fa-sort-up"></i>
                                <ul>
                                    <li><i className="fas fa-inbox"></i> mdr.uma28@gmail.com</li>
                                    <li><i className="fas fa-phone-alt"></i> 6173090676</li>
                                    <li><i className="fas fa-map-marker-alt"></i> Boston, MA, 02151</li>     
                                </ul>
                            </div> 
                                : null
                        }
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