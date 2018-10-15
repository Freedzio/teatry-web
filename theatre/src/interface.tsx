import * as React from 'react';
import seats from './seats.jpg';
import {BrowserRouter as Router, Link} from 'react-router-dom';


export default class MainPage extends React.Component {
    render () {
        return (     
            <Router>     
                <div className="container">
                    <div className="jumbotron">
                        <img src={seats} width='100%' />
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Dodawaj teatry</h2>
                            <p>Na naszej stronie nie ma jeszcze teatru,  
                            który odwiedziłeś? Dodaj go sam! Zarejestruj się,
                            aby dodać teatr i podziel się swoimi wrażeniami
                            z innymi użytkownikami.</p>
                            <Link to='/theatres'>
                                <button type="button" className="btn btn-default">
                                    Dowiedz się więcej >>
                                </button>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <h2>Dodawaj spektakle</h2>
                            <p>Na naszej stronie nie ma jeszcze spektaklu, który odiwedziłeś?
                                Dodaj go sam! Zarejestruj się, aby dodać spektakl i podziel się swoimi wrażeniami z innymi użytkownikami
                                dodając swoją recenzję. Filtruj wyniki wyszukiwania i znajdź najlepsze spektakle w swojej okolicy!
                            </p>
                            <Link to='/plays'>
                                <button type="button" className="btn btn-default">
                                    Dowiedz się więcej >>
                                </button>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <h2>Dziel się swoją opinią z innymi</h2>
                            <p>U nas możesz szczerze opisać wrażenia z wizyty w teatrze oraz dowiedzieć się, 
                                co sądzą o tym inni! Dziel się swoją opinią i wyszukuj najciekawsze spektakle 
                                w swojej okolicy! Zarejestruj się, aby dodawać recenzje!
                            </p>
                            <Link to='/register'>
                                <button type="button" className="btn btn-default">
                                    Zarejestruj się                        
                                </button>
                            </Link>
                        </div>
                    </div>   
                </div>                
            </Router>
        );
    }
}
