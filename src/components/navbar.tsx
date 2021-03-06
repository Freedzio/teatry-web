import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { State } from 'src/state';
import { SessionActionNames } from 'src/session/sesion.actions';

export class Navbar extends React.Component<NavbarProps, NavbarState> {

    render() {
        return (
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

interface NavbarProps {
    isLoggedIn: boolean,
    isAdmin: boolean,
    email: string,
    logOut: (event: any) => void
};

interface NavbarState {
}

const mapDispatchToProps = (dispatch: (arg: any) => void) => ({
    logOut: () => dispatch({ type: SessionActionNames.SESSION_CLEAR })
});

export default connect((state: State) => ({
    isLoggedIn: state.session.email !== null && state.session.password !== null,
    isAdmin: state.session.role === 'Administrator',

    email: state.session.email
}), mapDispatchToProps)(Navbar);