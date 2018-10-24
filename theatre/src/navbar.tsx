import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { State } from './state';
import { SessionActionNames } from './session/sesion.actions';

<<<<<<< HEAD
export default class Navbar extends React.Component {
    render () {
        return (            
=======
export class Navbar extends React.Component<NavbarProps, NavbarState> {

    render() {
        return (
>>>>>>> conditional-rendering
            <nav className="navbar navbar-inverse">
                <div className="navbar-header navbar-brand">
                    <strong><Link to='/'>TeatryWeb</Link></strong>
                </div>
                <div id="navbarCollapse" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to='/theatres'>Teatry</Link></li>
                        <li><Link to='/plays'>Spektakle</Link></li>
                        {!!this.props.isAdmin && <li><Link to='/roles'>Panel administratora</Link></li>}
                    </ul>
                    {!this.props.isLoggedIn && <ul className="nav navbar-nav navbar-right">
                        <li><Link to='/login'>Zaloguj się</Link></li>
                        <li><Link to='/register'>Zarejestruj się</Link></li>
                    </ul>}
                    {!!this.props.isLoggedIn && <ul className='nav navbar-nav navbar-right'>
                        <li><Link to='/'>Hello, {this.props.email}</Link></li>
                        <li onClick={this.props.logOut}><Link to='/'>Wyloguj</Link></li>
                    </ul>}
                </div>
            </nav>
        )
    }
}
<<<<<<< HEAD
=======

interface NavbarProps {
    isLoggedIn: boolean,
    isAdmin: boolean,
    email: string,
    logOut: (event: any) => void
};

interface NavbarState {
    isAdmin: boolean
}

const mapDispatchToProps = (dispatch: (arg: any) => void) => ({
    logOut: () => dispatch({ type: SessionActionNames.SESSION_CLEAR })
});

export default connect((state: State) => ({
    isLoggedIn: state.session.email !== null && state.session.password !== null,
    isAdmin: state.session.role === 'admin',
    email: state.session.email
}), mapDispatchToProps)(Navbar);
>>>>>>> conditional-rendering
