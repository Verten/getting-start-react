/**
 * Created by ebinhon on 2/26/2016.
 */
import React from 'react';
import { Router, Route, Link,hashHistory } from 'react-router';
import App from './components/App/App.js';
import Index from './components/Page/Index/Index.js';
import About from './components/Page/About/About.js';
import Comment from './components/Page/Comment/Comment.js';
import NotFound from './components/Page/NotFound/NotFound.js';

//With JSX
//React.render(
//
//    <Router history={hashHistory}>
//        <Route path="/" component={App}>
//            <Route path="about" component={About} />
//            <Route path="index" component={Index} />
//        </Route>
//    </Router>
//    ,
//    document.getElementById('app')
//
//);

//config
const router_Config = [
    {
        path: '/',
        component: App,
        indexRoute: {component:Index},
        childRoutes:[
            {
                path: 'index',
                component: Index
            },
            {
                path: 'about',
                component: About
            },
            {
                path: 'comment',
                component: Comment
            },
            {   //should always be last
                path: '*',
                component: NotFound,
            }
        ]
    },
    {
        path: '*',
        component: NotFound,
    }
];

React.render(
    <Router routes={router_Config} history={hashHistory} />
    ,
    document.getElementById('app')
);
