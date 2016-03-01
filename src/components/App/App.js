/**
 * Created by ebinhon on 2/29/2016.
 */
import React from 'react';
import Header from '../Header/Header.js';
import Content from '../Content/Content.js';
import Footer from '../Footer/Footer.js'

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {

        };
    }
    render(){
        return (
            <div className="main_page">
                <Header content="Demo React Title"/>
                <Content content="Demo React Content" />
            </div>
        );
    }
}