import React from 'react'
import {useParams} from 'react-router-dom'

const Action = () => {
    const {action} = useParams();
    switch(action) {
        case 'SignUp' : {
            return (
            <>
                <form aria-label={`user${action}`}>
                    <button aria-label={`submit${action}`}>Sign Up</button>
                </form>
            </>)
            break;
        }
    }
}
