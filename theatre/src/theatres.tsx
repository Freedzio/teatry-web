import * as React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { State } from './state';

export class Theatres extends React.Component<TheatresProps> {
    render () {
        return (
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
                        {!!this.props.isLoggedIn && <Link to='/theatreForm'>
                            <button type="button" className="btn btn-default">
                                Dodaj teatr
                            </button>
                        </Link>}
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
        )
    }
}

interface TheatresProps {
    isLoggedIn: boolean
};

const mapDispatchToProps = () => ({})

export default connect((state: State) => ({
    isLoggedIn: state.session.email !== null && state.session.password !== null
}), mapDispatchToProps)(Theatres);