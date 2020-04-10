import React, { useState } from 'react';
import { useGlobal } from 'reactn';
import './SignInView.scss';

const SignInView = () => {
    const [global, setGlobal] = useGlobal('userIsAuth')
    const [password, setPassword] = useState('')

    const setCorrectPassword = () => {
        localStorage.setItem("delta-survey", JSON.stringify({ "pw": 'delta' }));
        setGlobal({
            ...global,
            userIsAuth: true
        })
    }

    const handlePasswordSubmit = () => {
        password === 'delta'
            ? setCorrectPassword() : setPassword('')
    }

    return (
        <div className='SignInView'>
            {/* <img src={gif} alt={'delta'}/> */}
            <form onSubmit={handlePasswordSubmit}>
                <label>Password:</label>
                <div className='content'>
                    <input type='password' className='pw' onChange={(event) => setPassword(event.target.value)} />
                    <input type="submit" className='btn-primary' value="Submit" />
                </div>

            </form>
        </div>
    )
}

export default SignInView;
