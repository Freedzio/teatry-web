import * as React from 'react';
import { Link } from 'react-router-dom';
import { State } from './state';
import { connect } from 'react-redux'

export class Plays extends React.Component<PlaysProps> {
    render() {
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
                            {!!this.props.isLoggedIn && <Link to='/playForm'>
                                <button type="button" className="btn btn-default">
                                    Dodaj spektakl
                                    </button>
                            </Link>}
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

interface PlaysProps {
    isLoggedIn: boolean
};

const mapDispatchToProps = () => ({})

export default connect((state: State) => ({
    isLoggedIn: state.session.email !== null && state.session.password !== null
}), mapDispatchToProps)(Plays);