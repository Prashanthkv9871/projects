import React, { Component } from 'react'

class Digitalclock extends Component {
    constructor(props){
        super(props);
        this.state=({digital :new Date().toLocaleTimeString()})
    }

    componentDidMount= ()=>{
        setInterval(()=>{
            this.setState({digital : new Date().toLocaleTimeString()});
        },1000)
    }
    
    render() {
        return (
            <>
                <div className='card'>
                    <div className='card-header'>
                        <h4>{ this.state.digital}</h4>
                    </div>
                </div>
            </>
        )
    }
}

export default Digitalclock
