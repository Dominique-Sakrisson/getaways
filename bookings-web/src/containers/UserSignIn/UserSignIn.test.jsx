import React from 'react'
import {screen, render} from '@testing-library/react'
import UserSignIn from './UserSignIn'
import {MemoryRouter, Route} from 'react-router-dom'
import App from '../../components/app/App'


describe('UserSignIn page', () => {
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
})
