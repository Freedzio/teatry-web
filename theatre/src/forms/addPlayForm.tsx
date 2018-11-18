import * as React from 'react';
import { Link } from 'react-router-dom';
import plays from 'src/database/playsDatabase';
import theatres from 'src/database/theatresDatabase';
import categories from 'src/database/categoriesDatabase';

export default class AddPlayForm extends React.Component<AddPlayScreenProps, AddPlayScreenState> {

    constructor(props: any) {
        super(props);

        this.state = {
            title: '',
            theatre: '',
            category: '',
            isError: false,
            theatreError: false,
            categoryError: false,
            titleError: false
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

    private addPlay(event: any) {

        const playProps = {
            title: this.state.title,
            theatre: this.state.theatre,
            category: this.state.category
        };

        for (var i = 0; i < plays.length; i++) {
            if (this.state.title === plays[i].title && this.state.theatre === plays[i].theatre) {
                this.setState({
                    isError: true
                });

                break;

            }
        }

        if (this.state.theatre === '') {
            this.setState({
                theatreError: true
            })
        }

        if (this.state.category === '') {
            this.setState({
                categoryError: true
            })
        }

        if (this.state.title === '') {
            this.setState({
                titleError: true
            })
        }

        if (this.state.isError === false && this.state.categoryError === false && this.state.titleError === false && this.state.theatreError === false) {
            plays.push({
                title: playProps.title,
                theatre: playProps.theatre,
                category: playProps.category

            })
        }
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
                                        className="form-control" rows={3} id="descName" />
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
                                        <option>Wybierz teatr...</option>
                                        {theatres.map((theatre, index) =>
                                            <option key={theatre.name + index}>
                                                {theatre.name}, {theatre.town}
                                            </option>
                                        )}
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
                                        <option>
                                            Wybierz kategorię...
                                        </option>
                                        {categories.map((category, index) =>
                                            <option key={category + index}>
                                                {category}
                                            </option>
                                        )}
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
                                    <input type="url" className="form-control" id="linkName" />
                                </div>
                                <div className="col-md-3" />
                            </div>
                            {!!this.state.isError && <span>Spektakl o takim tytule już jest w bazie</span>}
                            {!!this.state.categoryError && <span>Wybierz kategorię spektaklu</span>}
                            {!!this.state.theatreError && <span>Wybierz teatr</span>}
                            {!!this.state.titleError && <span>Wpisz tytuł sztuki</span>}
                            <div className="row">
                                <div className="col-md-5" />
                                <div className="col-md-3">
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
    isError: boolean,
    theatreError: boolean,
    categoryError: boolean,
    titleError: boolean
}

interface AddPlayScreenProps {
    title: string,
    theatre: string,
    category: string,
    isError: boolean,
    addPlay: (title: string, theatre: string, category: string) => void;
}