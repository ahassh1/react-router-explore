import React, { useState } from 'react';

const ControlledField = () => {

    const[password,setPassword]= useState('secret')
    const[error,setError]= useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('submitted');
 }

    const handlePasswordOnChange = e =>{
        console.log(e.target.value)
        setPassword(e.target.value)

        if(password.length < 6){
            setError('password must be 6 characters or longer.')
        }
        else{
            setError('')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="" placeholder='email' required />
                <br />
                <input type="password" onChange={handlePasswordOnChange} defaultValue={password} name="password" placeholder='password' id="" required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;