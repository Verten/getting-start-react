/**
 * Created by ebinhon on 3/2/2016.
 */
import React from 'react';
import '../Page.scss';
import './Index.scss';
import Header from '../../Header/Header.js';
import Content from '../../Content/Content.js';
import Footer from '../../Footer/Footer.js';

export default class IndexPage extends React.Component {
    constructor() {
        super();
        this.state = {
            init:true
        }
    }
    render() {
        return(
            <div className="page">
                <Header style="indexPage_header" content="Index Page Header"/>
                <Content style="indexPage_content" content="Hello Index Page">
                    For React study
                </Content>
                <Footer style="indexPage_footer" content="Index Page Footer"/>
            </div>
        );
    }
}