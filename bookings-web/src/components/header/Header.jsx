import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <ul aria-label='userControlList'>
            <li>
                <Link to='/user/signIn'>Sign In</Link>
                <Link to='/user/SignUp'>Sign Up</Link>
            </li>
        </ul>
    )
}

export default Header;
