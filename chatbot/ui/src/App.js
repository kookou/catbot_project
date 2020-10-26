import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { SignIn, Review, SignUp, Main, ReviewWritePage, UserInfo, UserPage, ShopMain, Order } from './components'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Header, Footer } from './components/common'
// import ReduxThunk from 'redux-thunk'

// 아직 의미 모름
// const rootReducer = combineReducers({
//     itemReducer
// })

const App = () => {
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
    return (<>
        {/* <div style={{ width: "1000px", margin: "0 auto" }}> */}

        <Router>
            <Header />
            {/* <Nav isAuth = {loggedIn}/> */}
            <main>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/main" component={Main} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/review" component={Review} />
                    <Route path="/reviewwrite" component={ReviewWritePage} />
                    <Route path="/userinfo" component={UserInfo} />
                    <Route path="/userpage" component={UserPage} />
                    <Route path="/shop" component={ShopMain} />
                    <Route path="/order" component={Order} />
                    {/* <Redirect from={"/history"} to ={"/about/history"}/>
                    <Redirect from={"/services"} to ={"/about/services"}/>
                    <Redirect from={"/location"} to ={"/about/location"}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/events" component={Events}/>
                    <Route path="/products" component={Products}/>
                    <Route component={Error}/> */}
                </Switch>
            </main>
            <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </Router>
        {/* </div> */}
    </>)
}

export default App