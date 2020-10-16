import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Review} from '../components/review'
import {SignIn} from '../components/user'

const ReviewPage = () => <>
    <BrowserRouter>
        <div className="main">
            <Switch>
                <Route path="/review" component={Review}/>              
            </Switch>
        </div>
    </BrowserRouter>
    </>

export default ReviewPage