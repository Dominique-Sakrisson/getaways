import React, {useState} from 'react'

const UserSignIn = () => { 
    const [number, countNumber] = useState(0);
    const handleClick= (e) => {
        e.preventDefault();
        countNumber(number + 1);
        console.log(number);
    }

    return <form aria-label='userSignIn'>
        <button onClick={handleClick} aria-label='submitSignIn'>Sign In</button>
    </form>
}

export default UserSignIn;
