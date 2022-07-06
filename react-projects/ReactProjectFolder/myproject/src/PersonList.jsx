import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons);
      })
  }

  render() {
    return (
    <div>
      <h1>Name : {this.props.name}</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
        
      <tr>
       { this.state.persons.map(person => <td>{person.id}</td>)}
       { this.state.persons.map(person => <td>{person.name}</td>)}

      </tr>
      </table>
    </div>      
    )
  }
}