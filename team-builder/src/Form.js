import React, { useEffect } from 'react';

export default function Form (props) {
    const {values, updateForm, submitForm, memberToEdit, setFormValues} = props

    const onChange = evt => {
        const { name, value } = evt.target
        updateForm(name, value)
    }
    
    const onSubmit = evt => {
        evt.preventDefault()
        submitForm()
    }


    useEffect(() => {
        setFormValues(memberToEdit)
        console.log(values)
    }, [memberToEdit])
    
    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='header'>
                <h2> Add an amazing name to the list: </h2>
            </div>

            <div className='inputs'>
                <div className='input-name'>
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

                <div className='input-email'>
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

                <div className='input-role'>
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
            <button disabled={!values.username || !values.email || !values.role ? false  : true}> Submit</button>
        </form>
    )
}