import React, { useState } from 'react';
import './App.css';
import Form from './Form'
import List from './List'

const initialFormValues = {
  name: '',
  email: '', 
  role: '',
}

function App() {
  const [list, setList] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [memberToEdit, setMemberToEdit] = useState({})

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    
    const contact = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!contact.name || !contact.email || !contact.role) return 

    setList([...list, contact]);
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form  updateForm={updateForm} submitForm={submitForm} values={formValues} memberToEdit={memberToEdit} setFormValues={setFormValues}/>
      </header>

      {
        list.map( item => {
          return (
            <List item={item} key={item.name} setFormValues={setFormValues}/>
          )
        })
      }
    </div>
  );
}

export default App;
