import React from 'react'
import {SignIn, Review, SignUp, Blog, ReviewWrite, Error} from '../components'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'


const Main = () => <>
        <BrowserRouter>
            <div classname="main">
                <Switch>
                    <Route exact path="/" component={Blog}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/review" component={Review}/>
                    <Route path="/reviewwrite" component={ReviewWrite}/>
                    {/* <Redirect from={"/history"} to ={"/about/history"}/>
                    <Redirect from={"/services"} to ={"/about/services"}/>
                    <Redirect from={"/location"} to ={"/about/location"}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/events" component={Events}/>
                    <Route path="/products" component={Products}/>
                    <Route component={Error}/> */}
                </Switch>
                
            </div>
        </BrowserRouter>
    </>


export default Main