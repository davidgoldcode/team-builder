import React from 'react';

export default function Form (props) {
    const {values, updateForm, submitForm} = props

    const onChange = evt => {
        const { name, value } = evt.target
        updateForm(name, value)
    }
    
    const onSubmit = evt => {
        evt.preventDefault()
        submitForm()
    }

    const disableButton = (values) => {
        return !values.username || !values.email || !values.role ? true : false
    }
    
    return (
        <form class='form-container' onSubmit={onSubmit}>
            <div class='header'>
                <h2> Add to the list: </h2>
                <button disabled={disableButton}> Submit</button>
            </div>

            <div class='inputs'>
                <div class='input-name'>
                    <label>Name:&nbsp;
                        <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        placeholder='Type in name'
                        type='text'
                        />
                    </label>
                </div>

                <div class='input-email'>
                    <label>Email:&nbsp;
                        <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        placeholder='Email Address'
                        type='email'
                        />
                    </label>
                </div>

                <div class='input-role'>
                    <label>Role:&nbsp;
                        <select 
                        value={values.role}
                        onChange={onChange}
                        name='role' >
                            <option value="">--Select a Role--</option>
                            <option value="front-end-engineer">Front-End Engineer</option>
                            <option value="back-end-engineer">Back-End Engineer</option>
                            <option value="product-manager">Product Manager</option>
                        </select>
                    </label>
                </div>
            </div>
        </form>
    )
}