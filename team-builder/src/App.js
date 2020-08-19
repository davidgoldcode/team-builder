import React, { useState } from 'react';
import './App.css';
import Form from './Form'

const initialFormValues = {
  name: '',
  email: '', 
  role: '',
}

function App() {
  const [list, setList] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

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
        <Form  updateForm={updateForm} submitForm={submitForm} values={formValues}/>
      </header>
    </div>
  );
}

export default App;
