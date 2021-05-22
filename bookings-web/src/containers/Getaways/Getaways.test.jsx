import React from 'react'
import {screen, render, waitFor} from '@testing-library/react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {MemoryRouter, Route} from 'react-router-dom'
import App from '../../components/app/App'
// import Getaways from './Getaways'
import Data from './__snapshot__/snapshot.json'

const data = Data;
const server = setupServer(
    rest.get('http://localhost:7890/api/v1/places', (req,res,ctx) => {
        return res(ctx.json({data}));
    })
);

describe('Tests the Gataway page', ()=> {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    it('Renders a list of Getaways', async() => {
        render(
        <MemoryRouter initialEntries={['/']}>
            <App />
            <Route path='/' />
        </MemoryRouter>);

            return waitFor(() => {
                const li = screen.getAllByRole('list', {name:'placeList'});
            })

    })
})
