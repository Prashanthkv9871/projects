import React from 'react';

class Footer extends React.Component{
    state={
        msg:"Hello Hi"
    }

    updateHandler =()=>{
        this.setState({
            msg:"Prashanth"
        });
        console.log(this.state.msg)
    }
    render(){
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button className="btn btn-primary px-4" onClick={this.updateHandler}>MSG</button>
            </div>
        )
    }
}

export default Footer;