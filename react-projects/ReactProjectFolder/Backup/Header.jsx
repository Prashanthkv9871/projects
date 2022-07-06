import React from "react";

class Header extends React.Component{
    render(){
        return(
            <div>
                <pre>{JSON.stringify(this.props)}</pre>
                <h1>Header Component</h1>
                <h2>My Name is : {this.props.name}</h2>
            </div>
        )
    }
}

export default Header;