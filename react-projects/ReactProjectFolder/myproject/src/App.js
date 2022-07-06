import React from 'react';
import PersonList from './PersonList'
//import Counter from './components/Counter';
//import Imagegallery from './components/Imagegallery';

class App extends React.Component {
  name = "Naga"
  render(){
    return(

      <div>
        <PersonList name={this.name}/>
        {/*<Counter />*/}
        {/*<Imagegallery/>*/}
      </div>
    );
  }
}
export default App;