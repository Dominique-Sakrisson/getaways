import React from 'react'
import styles from '../styles/styles.css'

export function userFormChoice(action, onSubmit, handleEmailChange, handlePasswordChange, handleConfirmChange, handleUsernameChange) {
    switch(action) {
        case 'SignUp' : {
            return (
                <form onSubmit={onSubmit} className={styles.userActionForm} aria-label={`user${action}`}>
                    <label>
                        {action} Form
                    </label><br/>
                    <label>
                        Email
                        <input type='email' onChange={handleEmailChange}/>
                    </label><br/>
                    <label>
                        Username
                        <input type='text' onChange={handleUsernameChange}/>
                    </label><br/>
                    <label>
                        Password
                        <input type='password' onChange={handlePasswordChange}/>
                    </label><br/>
                    <label>
                        Confirm Password
                        <input type='password' onChange={handleConfirmChange}/>
                    </label><br/>
                    <button  aria-label={`submit${action}`}>Sign Up</button>
                </form>
            )
            break;
        }
        case 'SignIn' : {
            return (
                <form onSubmit={onSubmit} className={styles.userActionForm} aria-label={`user${action}`}>
                    <label>
                        {action} Form
                    </label><br/>
                    <label>
                        Username/ email
                        <input />
                    </label><br/>
                    <label>
                        Password
                        <input />
                    </label><br/>

                    <button aria-label={`submit${action}`}>Sign In</button>
                </form>
            )
            break;
        }
        default: {
            return ' idk something happened'
            break;
        }
    }
}

export async function signUpUser(email, password, username){
    const submit = await fetch('http://localhost:7890/api/v1/users/create',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            email,
            password,
            username
        }
    })
    const json = await submit.json();
}

