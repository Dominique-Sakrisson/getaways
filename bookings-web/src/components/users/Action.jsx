import React from 'react'
import {userFormChoice} from '../../services/users'

const Action = ({action, onClick}) => {
    return userFormChoice(action, onClick);
}

export default Action;
