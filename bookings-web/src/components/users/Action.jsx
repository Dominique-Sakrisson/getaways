import React from 'react'
import {useParams} from 'react-router-dom'

const Action = ({action, onClick}) => {
    // const {action} = useParams();
    switch(action) {
        case 'SignUp' : {
            return (
                <form  aria-label={`user${action}`}>
                    <label>
                        {action}
                        <input />
                    </label>
                    <button onClick={onClick} aria-label={`submit${action}`}>Sign Up</button>
                </form>
            )
            break;
        }
        case 'SignIn' : {
            return (
                <form aria-label={`user${action}`}>
                    <label>
                        {action}
                        <input />
                    </label>
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

export default Action;
