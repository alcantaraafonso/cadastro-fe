import React from 'react'


export default props => (
    <button type={props.type} className={`btn btn-${props.buttonClass}`}
            onClick={props.handleClick}>
            {props.label}
    </button>
)