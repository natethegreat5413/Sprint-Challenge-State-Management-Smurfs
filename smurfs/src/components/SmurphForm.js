import React, { useState } from 'react'
import axios from 'axios';






export default function SmurphForm(){
    
    const [smurphInfo, setSmurphInfo] = useState({
        name: '',
        age: '',
        height: '',
    })
    
    
    const handleChanges = e => {
        e.preventDefault();
        setSmurphInfo({ ...smurphInfo, [e.target.name]: e.target.value });
    }

    const formSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:3333/smurfs', smurphInfo)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return(
        <>
        <h2>Make yourself a Smurph</h2>
        <div className='form-container'>
            <form onSubmit={formSubmit}>

                <label htmlFor='name'>
                    name
                    <input
                    type='text'
                    name='name'
                    id='name'
                    value={smurphInfo.name}
                    onChange={handleChanges}
                    />
                </label>

                <label htmlFor='age'>
                    age
                    <input
                    type='text'
                    name='age'
                    id='age'
                    value={smurphInfo.age}
                    onChange={handleChanges}
                    />
                </label>

                <label htmlFor='height'>
                    height
                    <input
                    type='text'
                    name='height'
                    id='height'
                    value={smurphInfo.height}
                    onChange={handleChanges}
                    />
                </label>

                <button onClick={formSubmit}>Add Smurph</button>
            </form>

        </div>
        </>

    )
}