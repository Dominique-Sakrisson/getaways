import React from 'react'
import styles from '../styles/styles.css'

export function userFormChoice(action, onClick) {
    switch(action) {
        case 'SignUp' : {
            return (
                <form className={styles.userActionForm} aria-label={`user${action}`}>
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
                    <label>
                        Confirm Password
                        <input />
                    </label><br/>
                    <button onClick={onClick} aria-label={`submit${action}`}>Sign Up</button>
                </form>
            )
            break;
        }
        case 'SignIn' : {
            return (
                <form className={styles.userActionForm} aria-label={`user${action}`}>
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

                    <button onClick={onClick} aria-label={`submit${action}`}>Sign In</button>
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


