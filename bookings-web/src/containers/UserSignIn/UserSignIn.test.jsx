import React from 'react'
import {screen, render} from '@testing-library/react'
import UserSignIn from './UserSignIn'

describe('UserSignIn page', () => {
    it('Displays a form to collect users email and password', () => {
        render(<UserSignIn />)

        const form = screen.getByRole('form', {name: 'userSignIn'});
        const button = screen.getByRole('button', {name: 'submitSignIn'});
    })
})
