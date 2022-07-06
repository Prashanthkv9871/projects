import React, { Component } from 'react'

class Login extends Component {
    state={
        name:"",
        email:""
    }
    UpdateHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    SubmitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.SubmitHandler}>
                    <label>Email : </label>
                    <input type="text" onChange={this.UpdateHandler} name="name"/><br/><br/>
                    <label>Password : </label>
                    <input type="text" onChange={this.UpdateHandler} name="email"/> <br/><br/>
                    <input type="submit" value="Login" />
                </form>
                <pre>{JSON.stringify(this.state)}</pre>
                
            </div>
        )
    }
}

export default Login
