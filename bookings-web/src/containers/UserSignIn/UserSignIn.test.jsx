import React from 'react'
import {screen, render} from '@testing-library/react'
import UserSignIn from './UserSignIn'
import {MemoryRouter} from 'react-router-dom'

describe('UserSignIn page', () => {
    it('Displays a form to collect users email and password', () => {
        render(
        <MemoryRouter initialEntries={['/user/signIn']}>
            <UserSignIn />
        </MemoryRouter>
        )

        const form = screen.getByRole('form', {name: 'userSignIn'});
        const button = screen.getByRole('button', {name: 'submitSignIn'});
    })
})
