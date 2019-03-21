import * as React from 'react';
import MainScreen from 'src/screens/mainScreen';
import Navbar from 'src/components/navbar';
import mask from './mask.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RegisterScreen from 'src/register/register';
import TheatresScreen from 'src/screens/theatresScreen';
import PlaysScreen from 'src/screens/playsScreen';
import LoginScreen from 'src/login/loginScreen';
import AddTheatreForm from 'src/forms/addTheatreForm'
import GoogleLogin from 'src/login/googleLogin'
import './css/bootstrap.css'
import './App.css'
import RolesScreen from 'src/screens/rolesScreen'
import AddRoleForm from 'src/forms/addRoleForm'
import RoleAssignScreen from 'src/screens/roleAssignScreen'
import MappedPlaysDetailsComponent from './components/mappedPlaysDetails'
import MappedAddTicket from './components/mappedAddTicket';
import MappedAddReview from './components/mappedAddReview';
import AddNewPlayScreen from './screens/addNewPlayScreen';
import { State } from './state';
import { connect } from 'react-redux';

class App extends React.Component<AppProps> {
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
          <Route path='/playForm' component={AddNewPlayScreen} />
          <Route path='/googleLogin' component={GoogleLogin} />
          <Route exact path='/roles' component={RolesScreen} />
          <Route path='/roles/addRole' component={AddRoleForm} />
          <Route path='/roles/roleAssign' component={RoleAssignScreen} />
          <MappedPlaysDetailsComponent />
          <MappedAddTicket />
          <MappedAddReview />
        </div>
      </Router>
    );
  }
}

interface AppProps {
  editing: boolean
}

const mapStateToProps = () => (state: State) => ({
  editing: state.editing.editing
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App);
