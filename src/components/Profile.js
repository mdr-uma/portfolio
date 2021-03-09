import React, { useEffect, useState } from 'react'
import image from '../images/uma.JPG'
import Video from '../videos/bg-video.mp4'

const Profile = () => {
    const [info, setInfo] = useState(null)

    useEffect(() => {
        document.body.addEventListener('click', () => {
            setInfo(null)
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="intro-message">
                        <h3>Hi, I’m Uma Manandhar.</h3>
                        <h4>I am a Software Engineer.</h4>
                        <h5>My expertise includes JavaScript, React, and Ruby on Rails.</h5>
                        <button className="btn btn-success ml-auto mr-1" onClick={() => setInfo(!info)}>Contact Info</button>
                        {info ? 
                            <div className="info shadow animate__animated animate__bounceInLeft">
                                <i className="fas fa-sort-up"></i>
                                <ul>
                                    <li><i className="fas fa-inbox"></i> uma.manandhar.s@gmail.com</li><hr/>
                                    <li><i className="fas fa-phone-alt"></i> 617.309.0676</li><hr />
                                    <li><i className="fas fa-map-marker-alt"></i> Boston, MA, 02151</li>     
                                </ul>
                            </div> 
                                : null
                        }
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="intro">
                        <img src={image} alt="" className="shadow"/>
                        <a href="https://twitter.com/imoohma"><i className="fab fa-twitter-square shadow animate__animated animate__bounceInDown" id="twitter"></i></a>   
                        <a href=" https://github.com/mdr-uma"><i className="fab fa-github-square shadow animate__animated animate__bounceInDown" id="git"></i></a>
                        <a href="https://www.linkedin.com/in/uma-manandhar"><i className="fab fa-linkedin shadow animate__animated animate__bounceInDown" id="linkedin"></i></a>
                    </div >
                    <div className="img-background shadow">
                        <video autoPlay loop muted className="bg-video">
                            <source src={Video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile