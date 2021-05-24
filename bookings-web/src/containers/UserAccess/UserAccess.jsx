import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import Action from '../../components/users/Action'

const UserAccess = () => {
    const {action} = useParams();
    const [number, countNumber] = useState(0);

    const handleClick= (e) => {
        e.preventDefault();
        console.log(e);
        countNumber(number + 1);
    }

    return <Action action={action} onClick={handleClick}/>
}

export default UserAccess;
