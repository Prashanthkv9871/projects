import React, { Component } from 'react'

class Login extends Component {
    state={
        isloggin:false,
        message:""
    }

    loginHandler=()=>{
        this.setState({isloggin:true,
            message:"Login Successful"
        })
    }

    logoutHandler=()=>{
        this.setState({isloggin:false,
        message:"Log out"})
    }
    render() {
        return (
            <div className="m-5">
                {
                    !this.state.isloggin ? (<>
                <button className="btn btn-primary mr-3" onClick={this.loginHandler}>Login</button>
                </>):
                ( <>
                <button className="btn btn btn-danger" onClick={this.logoutHandler}>Logout</button>
                </>
                    )
    }
                    <pre>{JSON.stringify(this.state)}</pre>

            </div>
        )
    }
}

export default Login
