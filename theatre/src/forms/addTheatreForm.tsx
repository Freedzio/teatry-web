import * as React from 'react';
import { Link } from 'react-router-dom';
import theatres from 'src/database/theatresDatabase';

export default class AddTheatreForm extends React.Component<AddTheatreScreenState, AddTheatreScreenProps> {
    constructor(props: any) {
        super(props);

        this.state = {
            name: '',
            town: '',
            isError: false,
            nameError: false,
            townError: false,
        };
    }

    onNameChange(event: any) {
        this.setState({
            name: event.target.value
        })
    }

    onTownChange(event: any) {
        this.setState({
            town: event.target.value
        })
    }

    private addTheatre(event: any) {

        const theatreProps = {
            name: this.state.name,
            town: this.state.town
        };

        for (var i = 0; i < theatres.length; i++) {
            if (this.state.name === theatres[i].name && this.state.town === theatres[i].town) {
                this.setState({
                    isError: true
                });

                return;
            }
        }

        let stateResult = {
            nameError: false,
            townError: false
        }

        if (this.state.name === '') {
            stateResult = {
                ...stateResult,
                nameError: true
            };
        }

        if (this.state.town === '') {
            stateResult = {
                ...stateResult,
                townError: true
            }
        }

        if (this.state.isError === false && stateResult.townError === false && stateResult.nameError === false) {
            theatres.push({
                name: theatreProps.name,
                town: theatreProps.town
            });
        }

        this.setState(stateResult);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>
                            Dodawanie teatru
                            </h1>
                        <form className="form-horizontal">
                            <div className="form-group">
                                <div className="col-md-3" />
                                <label htmlFor="inputName" className="control-label col-md-2">
                                    Nazwa
                                    </label>
                                <div className="col-md-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        onChange={this.onNameChange.bind(this)} />
                                    <span className="help-block">
                                        Pole wymagane
                                        </span>
                                </div>
                                <div className="col-md-3" />
                            </div>
                            <div className="form-group">
                                <div className="col-md-3" />
                                <label htmlFor="descName" className="control-label col-md-2">
                                    Opis
                                    </label>
                                <div className="col-md-3">
                                    <textarea className="form-control" rows={3} id="descName" />
                                </div>
                                <div className="col-md-3" />
                            </div>
                            <div className="form-group">
                                <div className="col-md-3" />
                                <label htmlFor="townName" className="control-label col-md-2">
                                    Miasto
                                    </label>
                                <div className="col-md-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="townName"
                                        onChange={this.onTownChange.bind(this)} />
                                    <span className="help-block">
                                        Pole wymagane
                                        </span>
                                </div>
                                <div className="col-md-3" />
                            </div>
                            <div className="form-group">
                                <div className="col-md-3" />
                                <label htmlFor="contactName" className="control-label col-md-2">
                                    Kontakt
                                    </label>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" id="contactName" />
                                </div>
                                <div className="col-md-3" />
                            </div>
                            <div className="form-group">
                                <div className="col-md-3" />
                                <label htmlFor="linkName" className="control-label col-md-2">
                                    Link do strony teatru
                                    </label>
                                <div className="col-md-3">
                                    <input type="url" className="form-control" id="linkName" />
                                </div>
                                <div className="col-md-3" />
                            </div>
                        </form>

                    </div>
                </div>
                {!!this.state.isError && <div>Ten teatr jest już w bazie danych</div>}
                {!!this.state.nameError && <div>Podaj nazwę teatru</div>}
                {!!this.state.townError && <div> Podaj miasto</div>}
                <div className="row">
                    <div className="col-md-5" />
                    <div className="col-md-3">
                        <button
                            type="button"
                            className="btn btn-default"
                            onClick={this.addTheatre.bind(this)}>
                            <strong>Dodaj teatr</strong>
                        </button>
                    </div>
                    <div className="col-md-4" />
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p>
                            <strong><Link to='/theatres'>Wróc do listy teatrów</Link></strong>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

interface AddTheatreScreenState {
    name: string,
    town: string,
    isError: boolean
}


interface AddTheatreScreenProps {
    name: string,
    town: string,
    isError: boolean,
    townError: boolean,
    nameError: boolean
}