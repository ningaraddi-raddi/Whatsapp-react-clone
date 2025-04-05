import React, { Component } from 'react'
import Home from './components/home';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import Login from './components/login'


class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' component={Home} exact></Route>
                    <Route path='/login' component={Login}></Route>
                </Switch>
            </div>
        )
    }
}

export default App;