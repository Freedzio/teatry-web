//pseudo <code>
//1. po lewej stronie paska nazwa systemu ktory jest linkiem do indexu 
//2. drugi element to odnosnik doi listy teatrow
//3. trzeci element to link do listy spektatkli
//4. prawa strona - zaloguj i zarejestruj

import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { State } from './state';
import { SessionActionNames } from './session/sesion.actions';


export class Navbar extends React.Component<NavbarProps> {
    render () {
        return (            
            <nav className="navbar navbar-inverse">
                <div className="navbar-header navbar-brand">
                    <strong><Link to='/'>TeatryWeb</Link></strong>
                 </div>
                 <div id="navbarCollapse" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to='/theatres'>Teatry</Link></li>
                        <li><Link to='/plays'>Spektakle</Link></li>
                    </ul>
                    {!this.props.isLoggedIn && <ul className="nav navbar-nav navbar-right">
                        <li><Link to='/login'>Zaloguj się</Link></li>
                        <li><Link to='/register'>Zarejestruj się</Link></li>
                    </ul>}
                    {!!this.props.isLoggedIn && 
                    <ul className='nav navbar-nav navbar-right'>
                        <li>{this.props.email}</li>
                        <li><button className='btn btn-default' onClick={this.props.logOut}>Wyloguj</button></li>
                    </ul>}
                </div>
            </nav>            
        )
    }
}

interface NavbarProps {
    isLoggedIn: boolean,
    email: string,
    logOut: (event: any) => void
};

const mapDispatchToProps = (dispatch: (arg: any) => void) => ({
    logOut: () => dispatch({ type: SessionActionNames.SESSION_CLEAR })
});

export default connect((state: State) => ({
    isLoggedIn: state.session.email !== null && state.session.password !== null,
    email: state.session.email
}), mapDispatchToProps)(Navbar);