import React, { Component } from 'react';
import CompC from './CompC';

class CompB extends Component {
    render() {
        
        return (
            <div>
                <pre>{JSON.stringify(this.props)}</pre>
                <h1>My Name : {this.props.e_name}</h1>

                <CompC name={this.props.e_name}/>
            </div>
        )
    }
}

export default CompB
