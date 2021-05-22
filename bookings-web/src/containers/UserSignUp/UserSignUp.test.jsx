import React from 'react'
import UserSignUp from './UserSignUp'
import {screen, render, fireEvent} from '@testing-library/react'
import {MemoryRouter, Route} from 'react-router-dom'
import App from '../../components/app/App'

describe('Tests the UserSignUp page', () => {
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
