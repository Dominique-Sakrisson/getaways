import React from 'react'
import {screen, render} from '@testing-library/react'
import UserSignUp from './UserSignUp'

describe('Tests the UserSignUp page', () => {
    it('Displays a form to collect new user information', () => {
        render(<UserSignUp />)
        const form = screen.getByRole('form', {name: 'userSignUp'});
    })
})
