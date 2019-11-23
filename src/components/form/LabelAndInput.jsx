import React from 'react'


/**
 * quando se usa um destructoring no redux-form ele mesmo tira o value e outros atributos do ...props.input
 * <input {...props.input} c
 */
export default props => (
    <div className='form-group'>
        <label htmlFor={props.name}>{props.label}</label>
        <input {...props.input} className='form-control'
            placeholder={props.placeholder}
            type={props.type} readOnly={props.readOnly} />
    </div>
)