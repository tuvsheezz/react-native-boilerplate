import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './Screen/Login.js'
import TopPage from './Screen/TopPage.js'

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} title="Login" initial={true} hideNavBar={true}/>
      <Scene key="toppage" component={TopPage} title="TopPage" hideNavBar={true}/>
    </Scene>
  </Router>
)

export default Routes
