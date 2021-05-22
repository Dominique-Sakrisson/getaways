import React from 'react'
import {useParams} from 'react-router-dom'
import styles from '../../styles/styles.css'
import {userFormChoice} from '../../services/users'

const Action = ({action, onClick}) => {
    return userFormChoice(action, onClick);
}

export default Action;
