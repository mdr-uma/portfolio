import React from 'react'

const Skills = () => {
    return(
        <div className="container" id="skills">
            <br/>
            <h2>Skills Overview</h2><br/>
            <div className="row">
                <div className="skill col-md-4 pt-3 mb-5 mb-sm-5">
                    <i className="fas fa-folder-plus icons"></i>
                    <h4>Front-end</h4>
                    <p>- React/Redux</p> 
                    <p>- Javascript</p>
                    <p>- HTML/CSS</p>
                </div>
                <div className="skill col-md-4 pt-3 mb-5 mb-sm-5">
                    <i className="fas fa-database icons"></i>
                    <h4>Back-end</h4>
                    <p>- Ruby</p>
                    <p>- Ruby on Rails</p>
                    <p>- SQLite/Postgresql</p>
                </div>
                <div className="skill col-md-4 pt-3 mb-5 mb-sm-5">
                    <i className="fas fa-toolbox icons"></i>
                    <h4>Other tools</h4>
                    <p>- Sinatra</p>
                    <p>- Figma/Adobe Photoshop</p>
                    <p>- Bootstrap/Github</p>
                    <p>- Tailwind CSS</p>
                </div>
            </div>
        </div>
    )
}

export default Skills