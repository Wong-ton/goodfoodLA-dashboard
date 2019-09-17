import React, { Component } from 'react';
import Graph from './Graph'
import * as ROUTES from './constants/routes'
import { Route, Switch } from 'react-router-dom'
import Login from './Login'
import Add from './Add'
import Nav from './Nav'
import Affordable from './Affordable'

class App extends Component {
    state = {
        toggle: false, 
    }
    render(){
        return(
          <div>
            <Nav routes={ROUTES.NAV}/>                
              <Switch>
                <Route exact path={"/Affordable"} render={()=>{
                    return <Affordable/>}}/>
                <Route exact path='/' render={(props)=>{
                    return <Graph data={this.state}/>
                }}/>
                <Route exact path={ROUTES.ADD} render={()=>{
                    return<Add username={this.state.username}/>}}/>
              </Switch>
          </div>
        )
    }
}

export default App;
