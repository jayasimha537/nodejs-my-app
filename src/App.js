import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

<p><em><strong>What Else We Could Do:-</strong></em><br />There are a few other things we could have done to improve things, including:</p>
<ul>
<li style="text-align: left;">Placing webserver under AWS NLB (Load Balancer) with autoscaling for High Availablity</li>
<li style="text-align: left;">Use Docker Swarm / Kubernets for a rolling update without downtime ( No need of stop/start containers)</li>
<li style="text-align: left;">Start tagging images with specific version to match a GitHub branch or tag</li>
<li style="text-align: left;">Create an SSL certificate to serve over HTTPS</li>
<li style="text-align: left;"><a title="GitHub Repo of this project" href="https://github.com/jayasimha537/nodejs-my-app.git" target="_blank">GitHub Repo of this project</a><br /><br /></li>
</ul>
<p>&nbsp;</p>

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
