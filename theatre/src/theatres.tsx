import * as React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';

export default class Theatres extends React.Component {
    render () {
        return (
            <Router>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h1>
                        Teatry
                    </h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <Link to='/theatreForm'>
                            <button type="button" className="btn btn-default">
                                Dodaj teatr
                            </button>
                        </Link>
                        </div>
                        <div className="col-md-6">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="inputSearch">Wyszukaj</label><br />
                                    <input type="text" id="inputSearch" placeholder="Wyszukaj teatr..." />
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
                                <th>Nazwa</th>
                                <th>Miasto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Teatr 6. piętro</td>
                                <td>Warszawa</td>
                            </tr>
                            <tr>
                                <td>Teatr Bajka</td>
                                <td>Warszawa</td>
                            </tr>
                        </tbody>
                    </table>
                </div>        
            </div>
            </Router>
        )
    }
}