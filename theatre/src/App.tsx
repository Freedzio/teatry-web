import * as React from 'react';
import Navbar from './navbar';
import MainPage from './interface';
import Theatres from './theatres';
import logo from './logo.svg';
import Plays from './plays';
import TheatreForm from './theatreForm';
import PlayForm from './playForm';
import Register from './register';
import Login from './login';
import GoogleLogin from './googleLogin';
import Roles from './roles';
import RoleAssign from './roleAssign';

import './css/bootstrap.css';
import './App.css';

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
          <Theatres />
        </p>
        <p>
          <Plays />
        </p>
        <p>
          <TheatreForm />
        </p>
        <p>
          <PlayForm />
        </p>
        <p>
          <Register />
        </p>
        <p>
          <Login />
        </p>
        <p>
          <GoogleLogin />
        </p>
        <p>
          <Roles />
        </p>
        <p>
          <RoleAssign />
        </p>
      </div>
    );
  }
}

export default App;
