import './App.css';
import React, { Fragment } from 'react';

//components

import InputTest from './components/InputTest';
import ListTest from './components/ListTest';

function App(){
  return <Fragment>
          <div className="container">
          <InputTest/>
          <ListTest/>
          </div>
         </Fragment>
}


/*class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {apiResponse: ""};
  }
  
  callApi(){
    fetch("http://localhost:8080")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callApi();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.state.apiResponse}
          </p>
        </header>
      </div>
    );
  }
}*/



export default App;
