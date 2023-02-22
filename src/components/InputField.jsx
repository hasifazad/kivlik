import React from 'react'
import './InputField.css'

function InputField(props) {
    console.log('sgdfd', props.data);
    return (
        <div className='inputfield'>
            <div className='inputfield_box'>
                <label className='if_label'>{props.data.label}</label>
                <input className='if_input' type={props.data.type} />
                <p className='suffix'>{props.data.suffix}</p>
            </div>
        </div>
    )
}

export default InputField