import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import MainPage from './interface';
import Navbar from './navbar';
import mask from './mask.png';

import './css/bootstrap.css';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={mask} className="App-logo" alt="logo" />
            <h1 className="App-title">TeatryWeb</h1>
            <Navbar />
          </header>
          <p>
            <MainPage />  
          </p>  
        </div>
      </Router>
    );
  }
}

export default App;
