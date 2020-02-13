import * as React from 'react';
import { Link } from 'react-router-dom';
import { TheatreEntity, TheatresState } from 'src/theatres/theatres.state';
import { TheatresActionNames } from 'src/theatres/theatres.actions';
import { connect } from 'react-redux';
import { generateGuid } from 'src/common/guid';
import { mapObjectToArray } from 'src/common/mapObjectToArray';

export class AddTheatreForm extends React.Component<AddTheatreScreenProps, AddTheatreScreenState> {
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

        for (var i = 0; i < this.props.allTheatres.length; i++) {
            if (this.state.name === this.props.allTheatres[i].name && this.state.town === this.props.allTheatres[i].town) {
                this.setState({
                    
                    isError: true
                });

                return;
            } else this.setState({ isError: false })
        }

        let stateResult = {
            isError: false,
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

        if (stateResult.isError === false
            && stateResult.townError === false
            && stateResult.nameError === false
            && stateResult.linkError === false
            && stateResult.contactError === false
            && stateResult.descriptionError === false) {
            
                this.props.addTheatre({ ...theatreProps, id: generateGuid()})

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
                        {!!this.state.linkError && <div> Podaj link do strony teatru</div>}
                        {!!this.state.contactError && <div>Podaj kontakt do teatru</div>}
                        {!!this.state.descriptionError && <div> Podaj opis teatru</div>}
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


interface AddTheatreScreenProps extends TheatreEntity{
    history: any,
    addTheatre: (theatre: TheatreEntity) => void;
    allTheatres: TheatreEntity[]
}

const mapDispatchToProps = (dispatch: (arg: any) => void) => ({
    addTheatre: (theatre: TheatreEntity) => dispatch({ type: TheatresActionNames.ADD_THEATRE, theatre})
})

const mapStateToProps = (state: TheatresState) => ({
    allTheatres: mapObjectToArray(state.theatres)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTheatreForm);