import * as React from 'react';
import MainScreen from 'src/screens/mainScreen';
import Navbar from 'src/components/navbar';
import mask from './mask.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RegisterScreen from 'src/register/register';
import TheatresScreen from 'src/screens/theatresScreen';
import PlaysScreen from 'src/screens/playsScreen';
import LoginScreen from 'src/login/loginScreen';
import AddTheatreForm from 'src/forms/addTheatreForm';
import AddPlayForm from 'src/forms/addPlayForm';
import GoogleLogin from 'src/login/googleLogin';
/*import PlayDetailsScreen from 'src/screens/playDetailsScreen'*/

import './css/bootstrap.css';
import './App.css';
import RolesScreen from 'src/screens/rolesScreen';
import AddRoleForm from 'src/forms/addRoleForm';
import RoleAssignScreen from 'src/screens/roleAssignScreen';
import plays from './database/playsDatabase';
import PlayDetailsScreen from './screens/playDetailsScreen';

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

          <Route exact path='/' component={MainScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/theatres' component={TheatresScreen} />
          <Route exact path='/plays' component={PlaysScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/theatreForm' component={AddTheatreForm} />
          <Route path='/playForm' component={AddPlayForm} />
          <Route path='/googleLogin' component={GoogleLogin} />
          <Route exact path='/roles' component={RolesScreen} />
          <Route path='/roles/addRole' component={AddRoleForm} />
          <Route path='/roles/roleAssign' component={RoleAssignScreen} />
          {plays.map(({ title, description, category, link }) => (
            <Route
              exact path={`/plays/${title}`}
              render={() =>
                <PlayDetailsScreen
                  title={title}
                  description={description}
                  category={category}
                  link={link}
                />}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
