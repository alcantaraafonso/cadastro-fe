import React from 'react'

export default props => {
    const handleClick = props.handleClick ? props.handleClick : ''
    return (
        <button type='button' className={`btn btn-${props.buttonClass}`}
            onClick={handleClick} >
            <i className={`fa fa-${props.iconClass}`}></i>
        </button>        
    )
}