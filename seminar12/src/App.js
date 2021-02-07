
import './App.css';
import React, {Component} from 'react';
import Counter from "./counter/components/counter";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    );
  }
}


export default App;
