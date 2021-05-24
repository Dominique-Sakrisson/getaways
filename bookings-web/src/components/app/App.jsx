import React from 'react';
import Getaways from '../../containers/Getaways/Getaways';
import Details from '../../containers/Details/Details'
import UserAccess from '../../containers/UserAccess/UserAccess'
import {Switch, Route} from 'react-router-dom'


export default function App() {
  return(
  <Switch>
    <Route path='/' exact render={(routerProps) => <Getaways {...routerProps}/>}/>
    <Route path='/:id' exact render={(routerProps) => <Details {...routerProps} />} />
    <Route path='/user/:action' exact render={(routerProps) => <UserAccess {...routerProps} />} />
    {/* <Route path='/user/:action' exact render={(routerProps) => <UserSignIn {...routerProps} />} />
    <Route path='/user/:action' exact render={(routerProps) => <UserSignUp {...routerProps} />} /> */}
  </Switch>

  ) 
}
