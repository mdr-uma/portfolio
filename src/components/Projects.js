import React from 'react'
import ReactPlayer from 'react-player'

const Projects = () => {
    return(
        <div className="container">
            <br/>
            <h2>Projects</h2>
            <div className="row">
                <div className="col-md-4 pt-3 mr-.5">
                    <ReactPlayer width="350px" height="240px" className="project-video" controls url="https://www.youtube.com/watch?v=rsTp_xUZNXg&ab_channel=umamanandhar"/>
                    <br/>
                    <h4>Remote Jobs</h4>
                </div>
                <div className="col-md-4 pt-3 mr-.5">
                    <ReactPlayer width="350px" height="240px" className="project-video" controls url="https://www.youtube.com/watch?v=YrHOMUZceGY&ab_channel=umamanandhar" />
                    <br/>
                    <h4>Bites for Tikes</h4>
                </div>
                <div className="col-md-4 pt-3 mr-.5">
                    <ReactPlayer width="350px" height="240px" className="project-video" controls url="https://www.youtube.com/watch?v=sBPXnwbElYo&ab_channel=umamanandhar" />     
                    <br/>
                    <h4>Positive Quotes</h4>
                </div>
            </div>
        </div>
    )
}

export default Projects