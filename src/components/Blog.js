import React from 'react'
import image from '../images/redux.png'
import image1 from '../images/higher-order.png'
import image2 from '../images/state vs props.png'

const Blog = () => {
    return(
        <div className="container">
            <br/>
            <h2>Blog</h2>
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
    )
}

export default Blog