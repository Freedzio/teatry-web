import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { State } from 'src/state';
import theatres from 'src/database/theatresDatabase';

export class TheatresScreen extends React.Component<TheatresProps, TheatresState> {
    constructor(props: any) {
        super(props);
        this.state = {
            search: ''
        }
    }

    onInputChange(event: any) {
        this.setState({ search: event.target.value })
    }

    render() {
        let filteredTheatres = theatres.filter(
            (theatre) => {
                return theatre.name.toLocaleLowerCase().indexOf(this.state.search) !== -1
            }
        )
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
                                    <input
                                        type="text"
                                        id="inputSearch"
                                        placeholder="Wyszukaj teatr..."
                                        onChange={this.onInputChange.bind(this)} />
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
                {filteredTheatres.map(({ name, description, town, contact, link}, index) =>
                    <tr key={name + town + index}>
                        <td>{name}</td>
                        <td>{town}</td>
                    </tr>
                )}
            </tbody>
        </table>


                    {/*<TheatresTableComponent />*/}
                </div>
            </div>
        )
    }
}

interface TheatresProps {
    isLoggedIn: boolean
};

interface TheatresState {
    search: string
}

const mapDispatchToProps = () => ({})

export default connect((state: State) => ({
    isLoggedIn: state.session.email !== null && state.session.password !== null
}), mapDispatchToProps)(TheatresScreen);