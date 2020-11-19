import React from 'react'

const Skills = () => {
    return(
        <div className="container">
            <h2>Skills Overview</h2><br/>
            <div className="row">
                <div className="skill col-sm-4 pt-3 shadow mr-.5">
                    <i className="fas fa-folder-plus icons"></i>
                    <h4>Front-end</h4>
                    <p>- React/Redux</p> 
                    <p>- Javascript</p>
                    <p>- HTML/CSS</p>
                </div>
                <div className="skill col-sm-4 pt-3 shadow mr-.5">
                    <i className="fas fa-database icons"></i>
                    <h4>Back-end</h4>
                    <p>- Ruby</p>
                    <p>- Ruby on Rails</p>
                    <p>- SQLite/Postgresql</p>
                </div>
                <div className="skill col-sm-4 pt-3 shadow mr-.5">
                    <i className="fas fa-toolbox icons"></i>
                    <h4>Other tools</h4>
                    <p>- Sinatra</p>
                    <p>- Figma/Adobe Photoshop</p>
                    <p>- Bootstrap/Github</p>
                </div>
            </div>
            <a href="https://docs.google.com/document/d/1iNjL3kdGKESi8NJ4GNt1DN_oZnwLb2nRtPXHoFA3IoI/edit"><button className="btn btn-success my-2">Download Resume</button></a>
        </div>
    )
}

export default Skills