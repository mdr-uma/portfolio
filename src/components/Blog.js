import React from 'react'
import image from '../images/redux.png'
import image1 from '../images/higher-order.png'
import image2 from '../images/state vs props.png'
import image3 from '../images/class & functional.png'
import image4 from '../images/== & ===.png'
import image5 from '../images/Github.png'

const Blog = () => {
    return(
        <div className="container">
            <br/>
            <h2>Blog</h2>
            <div id="demo" className="carousel" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-sm-4 pt-3">
                                <h4>React/Redux</h4>
                                <a href="https://dev.to/uma/how-i-implemented-redux-in-my-react-project-3c79">
                                    <img width="360px" height="240px" src={image} alt="pic" className="shadow-lg"/>
                                </a>
                            </div>
                            <div className="col-sm-4 pt-3">
                                <h4>React</h4>
                                <a href="https://dev.to/uma/higher-order-components-5e52">
                                    <img width="360px" height="240px" src={image1} alt="pic" className="shadow-lg" />
                                </a>
                            </div>
                            <div className="col-sm-4 pt-3">
                                <h4>React</h4>
                                <a href="https://dev.to/uma/state-v-s-props-3pn0">
                                    <img width="360px" height="240px" src={image2} alt="pic" className="shadow-lg" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-sm-4 pt-3">
                                <h4>React</h4>
                                <a href="https://dev.to/uma/class-and-functional-components-4ik8">
                                    <img width="360px" height="240px" src={image3} alt="pic" className="shadow-lg" />
                                </a>
                            </div>
                            <div className="col-sm-4 pt-3">
                                <h4>JavaScript</h4>
                                <a href="https://dev.to/uma/the-difference-between-javascript-and-comparison-operators-2j78">
                                    <img width="360px" height="240px" src={image4} alt="pic" className="shadow-lg" />
                                </a>
                            </div>
                            <div className="col-sm-4 pt-3">
                                <h4>Github</h4>
                                <a href="https://dev.to/uma/my-first-ever-pr-pull-request-to-an-open-source-project-experience-obk">
                                    <img width="360px" height="240px" src={image5} alt="pic" className="shadow-lg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon text-success"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon text-success"></span>
                </a>
            </div>
        </div>
    )
}

export default Blog