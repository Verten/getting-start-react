/**
 * Created by ebinhon on 2/29/2016.
 */
import React from 'react';
import { Link } from 'react-router';
import './App.scss';

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {

        };
    }
    render(){
        return (
            <div className="main_page">
                <ul>
                    <li><Link to="/index">Index</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/comment">Comment</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}