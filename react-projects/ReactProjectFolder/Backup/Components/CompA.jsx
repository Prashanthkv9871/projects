import React, { Component } from 'react';
import CompB from './CompB';

class CompA extends Component {
    name="Prashanth";
    sal=45000;
    render() {
        return (
            <div>
                <CompB e_name={this.name} e_sal={this.sal}/>
            </div>
        )
    }
}

export default CompA
