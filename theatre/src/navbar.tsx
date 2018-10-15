//pseudo <code>
//1. po lewej stronie paska nazwa systemu ktory jest linkiem do indexu 
//2. drugi element to odnosnik doi listy teatrow
//3. trzeci element to link do listy spektatkli
//4. prawa strona - zaloguj i zarejestruj

import * as React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';

export default class Navbar extends React.Component {
    render () {
        return (
            <Router>
                <nav className="navbar navbar-inverse">
                    <div className="navbar-header">
                        <a href="#" className="navbar-brand"><strong><Link to='/'>TeatryWeb</Link></strong></a>
                    </div>
                    <div id="navbarCollapse" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to='/theatres'>Teatry</Link></li>
                            <li><Link to='/plays'>Spektakle</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to='/login'>Zaloguj się</Link></li>
                            <li><Link to='/register'>Zarejestruj się</Link></li>
                        </ul>
                    </div>
                </nav>
            </Router>
        )
    }
}