import * as React from 'react';

export default class Plays extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h1>
                        Spektakle
                    </h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <button type="button" className="btn btn-default">
                                Dodaj spektakl
                            </button>
                        </div>
                        <div className="col-md-6">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="inputSearch">Wyszukaj</label><br />
                                    <input type="text" id="inputSearch" placeholder="Wyszukaj spektakl..." />
                                    <button type="submit" className="btn btn-default">Szukaj</button> 
                                </div>                              
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tytuł</th>
                                <th>Kategoria</th>
                                <th>Teatr</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Balladyna</strong></td>
                                <td>Komedia</td>
                                <td>Teatr Dramatyczny</td>
                            </tr>
                            <tr>
                                <td><strong>Hitoria Jakuba</strong></td>
                                <td>Dramat</td>
                                <td>Teatr Dramatyczny</td>
                            </tr>
                        </tbody>
                    </table>
                </div>        
             </div>
        )
    }
}