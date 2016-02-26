/**
 * Created by ebinhon on 2/26/2016.
 */
import React from 'react';

export default class Text extends React.Component {
    constructor() {
        super();
        this.state = {
            init:true
        }
    }
    render() {
        return <h1>Hello {this.props.name} !</h1>;
    }
}