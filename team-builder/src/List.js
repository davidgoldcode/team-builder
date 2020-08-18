import React from 'react';

export default function List ({item, setFormValues}) {
    const editUser = () => {
        setFormValues(item)
      }    
    
    return (
        <div>
            <h2> {item.name} </h2>
            <p> {item.email} </p>
            <p> {item.role} </p>
            <button onClick={editUser}>Edit User</button>
        </div>

        
    )
}

// <button onClick={editUser}>Edit User</button>