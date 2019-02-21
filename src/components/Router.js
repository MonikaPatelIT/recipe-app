import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import Recipe from './Recipe';
const Router =() =>(
    <BrowserRouter basename="/react-recipe-app">
    <Switch>
    <Route path="/" component={App} exact />
    <Route path="/recipe/:id" component={Recipe}  />
    
    </Switch>
    </BrowserRouter>
)

export default Router;
     
