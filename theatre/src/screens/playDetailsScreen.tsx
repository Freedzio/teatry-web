import * as React from 'react';

export default class PlayDetailsScreen extends React.Component {
    render () {
        return (
            <div className="container">
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>
                            Szczegóły
                        </h1>
                        <h3>
                            Spektakl
                        </h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-1' />
                    <div className='col-md-8'>
                        <form className='form-horizontal'>
                            <div className='form-group'>
                                <label className='control-label col-md-3'>
                                    Tytuł
                                </label>
                                <div className='col-md-9'>
                                    <p className='form-control-static'>
                                        Historia Jakuba
                                    </p>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label className='control-label col-md-3'>
                                    Opis
                                </label>
                                <div className='col-md-9'>
                                    <p className='form-control-static'>
                                        Opowieść inspirowana faktami o księdzu i filozofie, który dowiaduje się, że nie jest tym, kim jest. Próbuje odkryć swoją prawdziwą tożsamość, ale we wspólczesnym świecie, gdzie trzeba jasno określać pochodzenie, wiarę czy narodowość, zaczyna coraz bardziej odczuwać inność i obcość. Próby scalenia na nowo swojej osobowości raz po raz narażają go na nieoczekiwane sytuacje i przygody, które od tragizmu chroni śmiech i wartka, burleskowa akcja.
                                    </p>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label className='control-label col-md-3'>
                                    Kategoria
                                </label>
                                <div className='col-md-9'>
                                    <p className='form-control-static'>
                                        Dramat
                                    </p>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label className='control-label col-md-3'>
                                    Link
                                </label>
                                <div className='col-md-9'>
                                    <p className='form-control-static'>
                                        http://adresteatru.pl/yadayada/yada
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-3' />
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <p><strong>
                            <a href='#'>
                                Edytuj dane spektaklu 
                            </a> | <a href='#'>
                                Wróc do listy spektakli 
                            </a> | <a href='#'>
                                Usuń spektakl
                            </a>
                        </strong></p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>
                            Bilety
                        </h1>
                        <a href='#'><strong>
                            Dodaj bilet    
                        </strong></a>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Użytkownik</th>
                                    <th>Rodzal biletu (np. ulgowy)</th>
                                    <th>Cena</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Jan</td>
                                    <td>Normalny</td>
                                    <td>80,00 zł</td>
                                    <td><strong>Usuń</strong></td>
                                </tr>
                                <tr>
                                    <td>Patrycja</td>
                                    <td>Studencki</td>
                                    <td>40,00 zł</td>
                                    <td><strong>Usuń</strong></td>
                                </tr>                                    
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>
                            Recenzje
                        </h1>
                        <a href='#'><strong>
                        Dodaj recenzję    
                        </strong></a>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Oceny</th>
                                    <th className='col-md-9'>Recenzje</th>
                                    <th>Użytkownik</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>5</td>
                                    <td>Mocna sztuka! Porusza tematy, o których często się nie mówi, do tego bardzo wzruszająco okazane, polecam z czystym sercem :)</td>
                                    <td>Jan</td>
                                    <td><strong>Usuń</strong></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Fajne, ale czuję niedosyt</td>
                                    <td>Patrycja</td>
                                    <td><strong>Usuń</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}