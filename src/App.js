import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.apiResponse}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}



export default App;
