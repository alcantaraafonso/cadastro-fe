import React from 'react'

import { Switch, Route, Redirect } from 'react-router'

import Home from './Home'
import User from '../components/user/User'

export default props=> (
    <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/users' component={User} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)