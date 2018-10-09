//pseudo <code>
//1. po lewej stronie paska nazwa systemu ktory jest linkiem do indexu 
//2. drugi element to odnosnik doi listy teatrow
//3. trzeci element to link do listy spektatkli
//4. prawa strona - zaloguj i zarejestruj

import * as React from 'react';

export default class Navbar extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-inverse">
                <div className="navbar-header">
                    <a href="#" className="navbar-brand"><strong>TeatryWeb</strong></a>
                </div>
                <div id="navbarCollapse" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="#">Teatry</a></li>
                        <li><a href="#">Spektakle</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Zaloguj się</a></li>
                        <li><a href="#">Zarejstruj się</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}