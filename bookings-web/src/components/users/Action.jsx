import React from 'react'
import {userFormChoice} from '../../services/users'

const Action = ({
    action, onSubmit, handleEmailChange, handleUsernameChange, handlePasswordChange, handleConfirmChange}) => {
    
        return userFormChoice(
        action, onSubmit, handleEmailChange, handleUsernameChange, handlePasswordChange, handleConfirmChange);
}

export default Action;
