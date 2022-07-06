import React, { Component } from 'react'
import Employee from './Employee'
class CompC extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <pre>{JSON.stringify(Employee)}</pre>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Country</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                        Employee.map((emp)=>{
                        return <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.country}</td>
                        </tr>                       
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CompC
