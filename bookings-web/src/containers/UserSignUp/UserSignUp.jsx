import React, {useState} from 'react'
import {useParams} from 'react-router-dom'


const UserSignUp = () => {
    const [number, countNumber] = useState(0);
    
    const handleClick= (e) => {
        e.preventDefault();
        countNumber(number + 1);
        console.log(number);
    }

    return <form aria-label='userSignUp'>
        <button onClick={handleClick} aria-label='submitSignUp'>Sign Up</button>
    </form>
}

export default UserSignUp;
