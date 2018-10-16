import * as React from 'react';
import MainPage from './interface';
import Navbar from './navbar';
import mask from './mask.png';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Register from './register';
import Theatres from './theatres';
import Plays from './plays';
import Login from './login';
import TheatreForm from './theatreForm';
import PlayForm from './playForm';
import GoogleLogin from './googleLogin';

import './css/bootstrap.css';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Router>        
        <div className="App">
          <header className="App-header">
            <Link to='/'>
              <img src={mask} className="App-logo" alt="logo" />
              <h1 className="App-title">TeatryWeb</h1>
            </Link>
            <Navbar />            
          </header>    
                
          <Route exact path='/' component={MainPage} />
          <Route path='/register' component={Register} />
          <Route path='/theatres' component={Theatres} />
          <Route path='/plays' component={Plays} />
          <Route path='/login' component={Login} /> 
          <Route path='/theatreForm' component={TheatreForm} />
          <Route path='/playForm' component={PlayForm} />
          <Route path='/googleLogin' component={GoogleLogin} />          
        </div>
      </Router>
    );
  }
}

export default App;
