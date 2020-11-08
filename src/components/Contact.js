import React from 'react'

const Contact = () => {
    return(
        <div className="container">
            <h2>Contact Info</h2>
            <div className="h-100 d-flex justify-content-center align-items-center">
                <div className="col-sm-4 p-5 text-left">
                    <h5><i className="fas fa-map-marker-alt contact-icon"></i>Boston, Massachusetts</h5><hr/>
                    <h5><i className="fas fa-envelope-square contact-icon"></i> mdr.uma28@gmail.com</h5><hr />
                    <h5><i className="fas fa-phone-alt contact-icon"></i>617.309.0676</h5>
                </div>
            </div>
        </div>

    )
}

export default Contact 