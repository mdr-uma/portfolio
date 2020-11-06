import React from 'react'

const Skills = () => {
    return(
        <div className="container">
            <h2>Skills Overview</h2>
            <div className="row">
                <div className="col-sm-4 pt-3">
                    <h4>Front-end</h4>
                    <p>- React/Redux</p> 
                    <p>- Javascript</p>
                    <p>- HTML/CSS</p>
                </div>
                <div className="col-sm-4 pt-3">
                    <h4>Back-end</h4>
                    <p>- Ruby</p>
                    <p>- Ruby on Rails</p>
                    <p>- SQLite/Postgresql</p>
                </div>
                <div className="col-sm-4 pt-3">
                    <h4>Other tools</h4>
                    <p>- Sinatra</p>
                    <p>- Figma/Adobe Photoshop</p>
                    <p>- Bootstrap/Github</p>
                </div>
            </div>
        </div>
    )
}

export default Skills