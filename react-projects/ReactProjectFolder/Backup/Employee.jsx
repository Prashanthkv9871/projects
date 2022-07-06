import React, { Component } from 'react'
class Employee extends Component {
    render() {
        let Employees = [
            {"id":1,"name":"Sydney","email":"splacidi0@vinaora.com","country":"Canada"},
            {"id":2,"name":"Gussie","email":"gfaull1@intel.com","country":"France"},
            {"id":3,"name":"Vivyan","email":"vcisson2@stanford.edu","country":"Indonesia"},
            {"id":4,"name":"Gracie","email":"gramsby3@patch.com","country":"Philippines"},
            {"id":5,"name":"Marybeth","email":"mriehm4@friendfeed.com","country":"China"},
            {"id":6,"name":"Arabela","email":"aphlippsen5@tamu.edu","country":"Guatemala"},
            {"id":7,"name":"Elwood","email":"echestnutt6@dyndns.org","country":"Indonesia"},
            {"id":8,"name":"Melony","email":"mcutting7@marriott.com","country":"China"},
            {"id":9,"name":"Edi","email":"egornar8@mit.edu","country":"Uganda"},
            {"id":10,"name":"Newton","email":"ncervantes9@odnoklassniki.ru","country":"Honduras"}];
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <table className="table table-hover bg-danger text-light">
                                <thead className="thead-success">
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>Country</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Employees.map((emp)=>{
                                            return( 
                                            <tr key={emp.id}>
                                                <td>{emp.id}</td>
                                                <td>{emp.name}</td>
                                                <td>{emp.email}</td>
                                                <td>{emp.country}</td>
                                            </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Employee;
