import React from 'react';
import Text from '../Text/Text.js'

export default class Content extends React.Component{
    constructor(){
        super();
        this.state = {

        };
    }

    render(){
        return(
            <Text text={this.props.content} />
        );
    }
}