import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = 'Srijan Samridh';
  return (
    <React.Fragment>
      <center><h1>Hey There I'm React a JavaScript library!</h1></center>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello <b>{name}</b>!<br></br>
            Edit <code>src/App.js</code> and save to reload.

          </p>
          <p>{Date()}</p>
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
    </React.Fragment>
  );
}

export default App;
