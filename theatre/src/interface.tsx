import * as React from 'react';
import "./css/bootstrap.css";

export default class MainPage extends React.Component {
    render () {
        return (          
             <div className="container-fluid">
                <div className="jumbotron">
                    <img src="/seats.jpg" />
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Dodawaj teatry</h2>
                        <p>Na naszej stronie nie ma jeszcze teatru,  
                        który odwiedziłeś? Dodaj go sam! Zarejestruj się,
                         aby dodać teatr i podziel się swoimi wrażeniami
                          z innymi użytkownikami.</p>
                    </div>
                    <div className="col-md-4">
                        <h2>Dodawaj spektakle</h2>
                        <p>Na naszej stronie nie ma jeszcze spektaklu, który odiwedziłeś?
                            Dodaj go sam! Zarejestruj się, aby dodać spektakl i podziel się swoimi wrażeniami z innymi użytkownikami
                            dodając swoją recenzję. Filtruj wyniki wyszukiwania i znajdź najlepsze spektakle w swojej okolicy!
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h2>Dziel się swoją opinią z innymi</h2>
                        <p>U nas możesz szczerze opisać wrażenia z wizyty w teatrze oraz dowiedzieć się, 
                            co sądzą o tym inni! Dziel się swoją opinią i wyszukuj najciekawsze spektakle 
                            w swojej okolicy! Zarejestruj się, aby dodawać recenzje!
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
