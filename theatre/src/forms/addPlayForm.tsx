import * as React from 'react';
import { Link } from 'react-router-dom';
import plays from 'src/database/playsDatabase';
import MappedTheatresListComponent from 'src/components/mappedTheatresList';
import MappedCategoriesListComponent from 'src/components/mappedCategoriesList';

export default class AddPlayForm extends React.Component<AddPlayScreenProps, AddPlayScreenState> {

    constructor(props: any) {
        super(props);

        this.state = {
            title: '',
            theatre: '',
            category: '',
            link: '',
            description: '',
            isError: false,
            theatreError: false,
            categoryError: false,
            titleError: false,
            descriptionError: false,
            linkError: false
        };
    }

    onTitleChange(event: any) {
        this.setState({
            title: event.target.value
        })
    }

    onTheatreChange(event: any) {
        this.setState({
            theatre: event.target.value
        })
    }

    onCategoryChange(event: any) {
        this.setState({
            category: event.target.value
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

    private addPlay(event: any) {

        const playProps = {
            title: this.state.title,
            theatre: this.state.theatre,
            category: this.state.category,
            link: this.state.link,
            description: this.state.description
        };

        for (var i = 0; i < plays.length; i++) {
            if (this.state.title === plays[i].title && this.state.theatre === plays[i].theatre) {
                this.setState({
                    isError: true
                });

                return;

            }
        }

        let stateResult = {
            categoryError: false,
            theatreError: false,
            titleError: false,
            descriptionError: false,
            linkError: false
        }

        if (this.state.theatre === '' || this.state.theatre === 'Wybierz teatr...') {
            stateResult = {
                ...stateResult,
                theatreError: true
            };
        }

        if (this.state.category === '' || this.state.category === 'Wybierz kategorię...') {
            stateResult = {
                ...stateResult,
                categoryError: true
            };
        }

        if (this.state.title === '') {
            stateResult = {
                ...stateResult,
                titleError: true
            };
        }

        if (this.state.link === '') {
            stateResult = {
                ...stateResult,
                linkError: true
            };
        }

        if (this.state.description === '') {
            stateResult = {
                ...stateResult,
                descriptionError: true
            };
        }

        if (this.state.isError === false
            && stateResult.categoryError === false
            && stateResult.titleError === false
            && stateResult.theatreError === false
            && stateResult.linkError === false
            && stateResult.descriptionError === false) {
            plays.push({
                title: playProps.title,
                description: playProps.description,
                theatre: playProps.theatre,
                category: playProps.category,
                link: playProps.link,
                tickets: [],
                reviews: []
            });

            this.props.history.push('/plays')
        }

        this.setState(stateResult);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>
                            Dodaj spektakl
                            </h1>
                        <form className="form-horizontal">
                            <div className="form-group">
                                <div className="col-md-3" />
                                <label htmlFor="titleName" className="control-label col-md-2">
                                    Tytuł
                                    </label>
                                <div className="col-md-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="titleName"
                                        onChange={this.onTitleChange.bind(this)} />
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
                                        rows={3} id="descName"
                                        onChange={this.onDescriptionChange.bind(this)} />
                                </div>
                                <div className="col-md-3" />
                            </div>
                            <div className="form-group">
                                <div className="col-md-3" />
                                <label htmlFor="theatreName" className="control-label col-md-2">
                                    Wybierz teatr
                                    </label>
                                <div className="col-md-3">
                                    <select
                                        className="form-control"
                                        id="theatreName"
                                        onChange={this.onTheatreChange.bind(this)}>
                                        <MappedTheatresListComponent />
                                    </select>
                                    <span className="help-block">
                                        Pole wymagane
                                        </span>
                                </div>
                                <div className="col-md-3" />
                            </div>
                            <div className="form-group">
                                <div className="col-md-3" />
                                <label htmlFor="categoryName" className="control-label col-md-2">
                                    Kategoria
                                    </label>
                                <div className="col-md-3">
                                    <select
                                        className="form-control"
                                        id="categoryName"
                                        onChange={this.onCategoryChange.bind(this)}>
                                        <MappedCategoriesListComponent />
                                    </select>
                                </div>
                                <div className="col-md-3" />
                            </div>
                            <div className="form-group">
                                <div className="col-md-3" />
                                <label htmlFor="linkName" className="control-label col-md-2">
                                    Link do strony teatru
                                    </label>
                                <div className="col-md-3">
                                    <input type="url"
                                        className="form-control"
                                        id="linkName"
                                        onChange={this.onLinkChange.bind(this)} />
                                </div>
                                <div className="col-md-3" />
                            </div>
                            <div className="row">
                                <div className="col-md-5" />
                                <div className="col-md-3">
                                    {!!this.state.isError && <div>Spektakl o takim tytule już jest w bazie</div>}
                                    {!!this.state.categoryError && <div>Wybierz kategorię spektaklu</div>}
                                    {!!this.state.theatreError && <div>Wybierz teatr</div>}
                                    {!!this.state.titleError && <div>Wpisz tytuł sztuki</div>}
                                    {!!this.state.linkError && <div>Podaj link do strony sztuki</div>}
                                    {!!this.state.descriptionError && <div>Podaj opis sztuki</div>}
                                    <button
                                        type="button"
                                        className="btn btn-default"
                                        onClick={this.addPlay.bind(this)}>
                                        <strong>Dodaj spektakl</strong>
                                    </button>
                                </div>
                                <div className="col-md-4" />
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p>
                                        <strong><Link to='/plays'>Wróc do listy spektakli</Link></strong>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

interface AddPlayScreenState {
    title: string,
    theatre: string,
    category: string,
    link: string,
    description: string,
    isError: boolean,
    theatreError: boolean,
    categoryError: boolean,
    titleError: boolean,
    descriptionError: boolean,
    linkError: boolean
}

interface AddPlayScreenProps {
    history: any
}