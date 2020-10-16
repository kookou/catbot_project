import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import {UserLogin,UserRegister,UserRemove,UserUpdate} from '../components/User'
import {UserNav} from '../components/User'


const User = () => (<>
    <Router>
        <UserNav/>
        <Switch>
            <Route path='/userlogin' component = {UserLogin}></Route>
            <Route path='/userregister' component = {UserRegister}></Route>
            <Route path='/userremove' component = {UserRemove}></Route>
            <Route path='/userupdate' component = {UserUpdate}></Route>
        </Switch>
    </Router>
</>)

export default User