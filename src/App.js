import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hi Jay



What Else We Could Do
There are a few other things we could have done to improve things, including:
    . Plaing webserver under AWS NLB (Load Balancer) with autoscaling for High Availablity
    . Use Docker Swarm / Kubernets for rolling update without downtime ( No need of stop/start containers) 
    . Start tagging images with specific version to match a GitHub branch or tag
    . Create an SSL certificate to serve over HTTPS
    . <a
          className="App-link"
          href="https://github.com/jayasimha537/nodejs-my-app.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo of this project
        </a>



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

export default App;
