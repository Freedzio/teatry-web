import * as React from 'react';
import './App.css';
import Navbar from './navbar';
import MainPage from './interface';
import Teatry from './teatry'
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lubię w pupkę</h1>
        </header>
        <p className="App-intro">
          <Navbar />
        </p>
        <p>
          <MainPage/>
        </p>
        <p>
          <Teatry />
        </p>
      </div>
    );
  }
}

export default App;
