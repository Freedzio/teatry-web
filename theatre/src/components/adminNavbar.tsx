//pseudo <code>
//1. po lewej stronie paska nazwa systemu ktory jest linkiem do indexu 
//2. drugi element to odnosnik doi listy teatrow
//3. trzeci element to link do listy spektatkli
//4. prawa strona - zaloguj i zarejestruj

import * as React from 'react';
import './bootstrap.css';

function adminNavbar () {
    return (
        <nav className="navbar navbar-inverse">
            <div className="navbar-header">
                 <a href="#" className="navbar-brand">TeatryWeb</a>
            </div>
            <div id="navbarCollapse" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li><a href="#">Teatry</a></li>
                    <li><a href="#">Spektakle</a></li>
                    <li><a href="#">Panel administratora</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Witaj, [username]</a></li>
                    <li><a href="#">Wyloguj</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default adminNavbar;
