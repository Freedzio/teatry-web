import * as React from 'react';
import { Link } from 'react-router-dom';
import theatres from 'src/database/theatresDatabase';

export default class AddTheatreForm extends React.Component<AddTheatreScreenProps, AddTheatreScreenState> {
    constructor(props: any) {
        super(props);

        this.state = {
            name: '',
            town: '',
            description: '',
            contact: '',
            link: '',
            isError: false,
            nameError: false,
            townError: false,
            descriptionError: false,
            linkError: false,
            contactError: false
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

    onDescriptionChange(event: any) {
        this.setState({
            description: event.target.value
        })
    }

    onLinkChange(event: any) {
        this.setState({
            link: event.target.value
        })
    }

    onContactChange(event: any) {
        this.setState({
            contact: event.target.value
        })
    }

    private addTheatre(event: any) {

        const theatreProps = {
            name: this.state.name,
            description: this.state.description,
            town: this.state.town,
            contact: this.state.contact,
            link: this.state.contact

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
            townError: false,
            descriptionError: false,
            contactError: false,
            linkError: false
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

        if (this.state.description === '') {
            stateResult = {
                ...stateResult,
                descriptionError: true
            }
        }

        if (this.state.link === '') {
            stateResult = {
                ...stateResult,
                linkError: true
            }
        }

        if (this.state.contact === '') {
            stateResult = {
                ...stateResult,
                contactError: true
            }
        }

        if (this.state.isError === false
            && stateResult.townError === false
            && stateResult.nameError === false
            && stateResult.linkError === false
            && stateResult.contactError === false
            && stateResult.descriptionError === false) {
            theatres.push({
                name: theatreProps.name,
                description: theatreProps.description,
                town: theatreProps.town,
                contact: theatreProps.contact,
                link: theatreProps.link
            });

            this.props.history.push('/theatres')
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
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        id="descName"
                                        onChange={this.onDescriptionChange.bind(this)} />
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
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="contactName"
                                        onChange={this.onContactChange.bind(this)} />
                                </div>
                                <div className="col-md-3" />
                            </div>
                            <div className="form-group">
                                <div className="col-md-3" />
                                <label htmlFor="linkName" className="control-label col-md-2">
                                    Link do strony teatru
                                    </label>
                                <div className="col-md-3">
                                    <input
                                     type="url" 
                                     className="form-control"
                                      id="linkName"
                                      onChange={this.onLinkChange.bind(this)} />
                                </div>
                                <div className="col-md-3" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5" />
                    <div className="col-md-3">
                        {!!this.state.isError && <div>Ten teatr jest już w bazie danych</div>}
                        {!!this.state.nameError && <div>Podaj nazwę teatru</div>}
                        {!!this.state.townError && <div> Podaj miasto</div>}
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
    description: string,
    link: string,
    contact: string,
    isError: boolean,
    nameError: boolean,
    townError: boolean,
    descriptionError: boolean,
    linkError: boolean,
    contactError: boolean
}


interface AddTheatreScreenProps {
    history: any
}