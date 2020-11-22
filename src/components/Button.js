import React from 'react'

const Button = (props) => {
    return(
        <button className="btn btn-info">{props.children}</button>
    )
}


export default Button