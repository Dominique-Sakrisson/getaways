import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import Action from '../../components/users/Action'
import {signUpUser} from '../../services/users'

const UserAccess = () => {
    const {action} = useParams();
    const [number, countNumber] = useState(0);
    const [email, useEmail] = useState('');
    const [username, useUsername] = useState('');
    const [password, usePassword] = useState('');
    const [confirm, useConfirm] = useState('');

    const handleEmailChange = (event) => {
       useEmail(event.target.value);
       console.log(email);
    }
    const handleUsernameChange = (event) => {
       useUsername(event.target.value);
    }
    const handlePasswordChange = (event) =>{
        usePassword(event.target.value);
    }
    
    const handleConfirmChange = (event) => {
        useConfirm(event.target.value);
        console.log(confirm);

    }
    const handleFormSubmit= (e) => {
        e.preventDefault();
        signUpUser(email,password, username);
        console.log(password);
        console.log(confirm);
        countNumber(number + 1);
    }

    return <Action action={action} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} handleConfirmChange={handleConfirmChange} handleUsernameChange={handleUsernameChange} onSubmit={handleFormSubmit} />
}

export default UserAccess;
