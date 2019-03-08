import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch  } from 'react-router-dom'
import Login from './pages/login/login'
import Create from './pages/create/create'
import Join from './pages/join/join'
import NotFound from './pages/notfound/404'
import './index.css';
import App from './App';

ReactDOM.render(
    (
        <BrowserRouter>
            <div>               
                <Switch>
                    <Route path="/main" component={ App } />
                    <Route path="/login" component={ Login } />
                    <Route path="/create" component={ Create } />
                    <Route path="/join" component={ Join } />
                    <Redirect to="/main" />
                    <Route component={ NotFound } />
                </Switch>              
            </div>
        </BrowserRouter>
    ), 
    document.getElementById('root')
);


