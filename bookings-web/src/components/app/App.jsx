import React from 'react';
import Getaways from '../../containers/Getaways';
import UserSignIn from '../../containers/UserSignIn/UserSignIn'
import UserSignUp from '../../containers/UserSignUp/UserSignUp'
import {Switch, Route} from 'react-router-dom'


export default function App() {
  return(
  <Switch>
    <Route path='/' exact render={(routerProps) => <Getaways {...routerProps}/>}/>
    <Route path='/user/signIn' exact render={(routerProps) => <UserSignIn {...routerProps}/>} />
    <Route path='/user/signUp' exact render={(routerProps) => <UserSignUp {...routerProps} />} />
  </Switch>

  ) 
}
