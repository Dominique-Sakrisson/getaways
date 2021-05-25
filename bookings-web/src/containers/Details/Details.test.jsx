import React from 'react'
import {MemoryRouter, Route} from 'react-router-dom'
import {screen, render, waitFor} from '@testing-library/react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import App from '../../components/app/App'
import Details from './Details'

const server = setupServer(
    rest.get('http://localhost:7890/api/v1/places/6092e1d88cb048f1d3300bdc', (req,res,ctx) => {
        // if (req.params.id)
        return res(ctx.json(/* */));
    })
);

describe('tests the single getaway page', ()=> {
    beforeAll(() => server.listen());
    afterAll(()=> server.close());
    it('Displays a getaway to the page', async() => {
        render(
        <MemoryRouter initialEntries={['/6092e1d88cb048f1d3300bd9']}>
            {/* <Details /> */}
            <App />
            <Route path='/:id' />
        </MemoryRouter>

        )
        return waitFor(() => {
            const ul = screen.getAllByRole('list', {name:'placeList'});
        })
    })
})
