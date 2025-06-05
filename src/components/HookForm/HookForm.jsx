import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {
     
    const [name,nameOnChange] = useInputField('');
    const [email, emailOnChange] =useInputField('');
    const [password, passwordOnChange] = useInputField('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit',name,email,password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} onChange={nameOnChange} type="text" />
                <br />

                <input onChange={emailOnChange} defaultValue={email} type="email" name="" id="" />
                <br />
                <input onChange={passwordOnChange}defaultValue={password} type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;