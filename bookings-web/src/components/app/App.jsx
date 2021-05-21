import React from 'react';
import Getaways from '../../containers/Getaways';
import UserSignIn from '../../containers/UserSignIn/UserSignIn'
import UserSignUp from '../../containers/UserSignUp/UserSignUp'
import {Switch, Route} from 'react-router-dom'


export default function App() {
  return(
  <Switch>
    <Route path='/' exact render={<Getaways {...routerProps}/>}/>
    <Route path='/users/signIn' exact render={<UserSignIn {...routerProps}/>} />
    <Route path='/users/signUp' exact render={<UserSignUp{...reouterProps} />} />
  </Switch>

  ) 
}
