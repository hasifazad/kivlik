import React from 'react'
import './Form.css'
import InputField from './InputField'

function Form() {
    const inputLabel = [
        { label: 'First Name', suffix: '', type: 'text' },
        { label: 'Last Name', suffix: '', type: 'text' },
        { label: 'Telephone', suffix: 'Please include your country and are code', type: 'number' }
    ]



    return (
        <div className='form'>
            <div className='form_box_head'>
                <h3 className='form_box_head1'>Personal Details</h3>
                <p className='form_box_head2'>Please complete the below form anr attach a CV</p>
            </div>
            <div className='form_box_1'>
                <InputField data={{ label: 'Email Address', suffix: '', type: 'text' }} />
            </div>
            <div className='form_box_1'>
                {
                    inputLabel.map((row, index) => <InputField key={index} data={row} />)
                }

            </div>
            <div className='form_box_1'>
                <InputField data={{ label: 'Upload CV', suffix: 'Select resume file (TXT, PDF or Word DOC)', type: 'file' }} />
            </div>
            <div className='form_button'>
                <button className='submit_button'>Submit</button>
            </div>
        </div>
    )
}

export default Form