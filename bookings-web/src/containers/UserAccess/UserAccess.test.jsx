import React from 'react'
import {screen, render, fireEvent} from '@testing-library/react'
import App from '../../components/app/App'
import {MemoryRouter, Route} from 'react-router-dom'

describe('Testing the UserAccess Page', () => {
    it('Displays a form to collect users email and password', () => {
        render(
        <MemoryRouter initialEntries={['/user/SignIn']}>
            <App />
            <Route path ='user/:action' />
        </MemoryRouter>
        )

        const form = screen.getByRole('form', {name: 'userSignIn'});
        const button = screen.getByRole('button', {name: 'submitSignIn'});
    })

    it('Displays a form to collect new user information', () => {
        render(
            <MemoryRouter initialEntries={['/user/SignUp']}>
                <App />
                <Route path='user/:action' />
            </MemoryRouter>
        )
        const form = screen.getByRole('form', {name: 'userSignUp'});
        const button = screen.getByRole('button', {name: 'submitSignUp'});
        fireEvent.click(screen.getByText('Sign Up'));
        fireEvent.click(screen.getByText('Sign Up'));
    })
})
