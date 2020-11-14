import React from 'react'
import image from '../images/redux.png'

const Blog = () => {
    return(
        <div className="container">
            <h2>Blog</h2>
            <div className="row">
                <div className="col-sm-6 pt-3">
                    <h4>React/Redux</h4>
                    <a href="https://dev.to/uma/how-i-implemented-redux-in-my-react-project-3c79">
                        <img width="360px" height="240px" src={image} alt="pic" />
                    </a>
                </div>
                <div className="col-sm-6 pt-3">

                </div>
            </div>
        </div>
    )
}

export default Blog