import * as React from 'react';
import { Link } from 'react-router-dom';
import { State } from 'src/state';
import { connect } from 'react-redux'
// import plays from 'src/database/playsDatabase';
import PlaysTableComponent from '../components/playsTableComponent';

export class PlaysScreen extends React.Component<PlaysProps, PlaysState> {
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
        // let filteredPlays = plays.filter(
        //     (play) => {
        //         return play.title.toLowerCase().indexOf(this.state.search) !== -1;
        //     }
        // )


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
                                    <input
                                        type="text"
                                        id="inputSearch"
                                        placeholder="Wyszukaj spektakl..."
                                        onChange={this.onInputChange.bind(this)} />

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <PlaysTableComponent />
                </div>
            </div>
        )
    }
}

interface PlaysProps {
    isLoggedIn: boolean
};

interface PlaysState {
    search: string
}

const mapDispatchToProps = () => ({})

export default connect((state: State) => ({
    isLoggedIn: state.session.email !== null && state.session.password !== null
}), mapDispatchToProps)(PlaysScreen);