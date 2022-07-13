import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Exchange from '../pages/Exchange';
import News from '../pages/News';
import NotFound from '../components/NotFound';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/exchange">
                            <Exchange />
                        </Route>
                        <Route path="/news">
                            <News />
                        </Route>
                        <Route path="/log-up">
                            <Register />
                        </Route>
                        <Route path="/log-in">
                            <Login />
                        </Route>
                        <Route>
                            <NotFound />
                        </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;
