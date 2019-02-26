import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import MappedTheatresListComponent from 'src/components/mappedTheatresList';
import MappedCategoriesListComponent from 'src/components/mappedCategoriesList';
import { PlayEntity } from 'src/plays/Plays.state';
import { connect } from 'react-redux';
import { PlaysActionNames } from 'src/plays/plays.actions';
import { generateGuid } from 'src/common/guid';
import autobind from 'autobind-decorator'
import { State } from 'src/state';
import { mapObjectToArray } from 'src/common/mapObjectToArray';
import { EditingActionNames } from 'src/editing/editing.actions';

export class AddPlayForm extends React.Component<AddPlayScreenProps & RouteComponentProps<any>, AddPlayScreenState> {

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
            linkError: false,
            playSubmitted: false,
            playEdited: false
        };
    }
    @autobind
    onTitleChange(event: any) {
        this.setState({
            title: event.target.value
        })
    }
    @autobind
    onTheatreChange(event: any) {
        this.setState({
            theatre: event.target.value
        })
    }
    @autobind
    onCategoryChange(event: any) {
        this.setState({
            category: event.target.value
        })
    }
    @autobind
    onDescriptionChange(event: any) {
        this.setState({
            description: event.target.value
        })
    }
    @autobind
    onLinkChange(event: any) {
        this.setState({
            link: event.target.value
        })
    }
    @autobind
    private addPlay(event: any) {

        const playProps = {
            title: this.state.title,
            theatre: this.state.theatre,
            category: this.state.category,
            link: this.state.link,
            description: this.state.description
        };

        for (var i = 0; i < this.props.allPlays.length; i++) {
            if (this.state.title === this.props.allPlays[i].title
                && this.state.theatre === this.props.allPlays[i].theatre) {
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
            linkError: false,
            playSubmitted: false,
            playEdited: false
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
            // plays.push({
            //     title: playProps.title,
            //     description: playProps.description,
            //     theatre: playProps.theatre,
            //     category: playProps.category,
            //     link: playProps.link,
            //     tickets: [],
            //     reviews: []
            // });

            this.props.addPlay({ ...playProps, id: generateGuid() });

            stateResult = {
                ...stateResult,
                playSubmitted: true
            }
        }

        this.setState(stateResult);
    }

    @autobind
    private editPlay(event: any) {

        const playProps = {
            title: this.state.title,
            theatre: this.state.theatre,
            category: this.state.category,
            link: this.state.link,
            description: this.state.description
        };

        /*for (var i = 0; i < plays.length; i++) {
            if (this.props.title === plays[i].title && this.props.theatre === plays[i].theatre) {
                plays[i].title = playProps.title
                plays[i].theatre = playProps.theatre
                plays[i].category = playProps.category
                plays[i].link = playProps.link
                plays[i].description = playProps.description

                return;

            }
        }*/

        let stateResult = {
            categoryError: false,
            theatreError: false,
            titleError: false,
            descriptionError: false,
            linkError: false,
            playSubmitted: false
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

        for (var i = 0; i < this.props.allPlays.length; i++) {

            if (this.props.title === this.props.allPlays[i].title
                && this.props.theatre === this.props.allPlays[i].theatre
                && stateResult.categoryError === false
                && stateResult.titleError === false
                && stateResult.theatreError === false
                && stateResult.linkError === false
                && stateResult.descriptionError === false) {

                // plays.splice(i, 1, {
                //     title: playProps.title,
                //     theatre: playProps.theatre,
                //     category: playProps.category,
                //     link: playProps.link,
                //     description: playProps.link,
                //     tickets: plays[i].tickets,
                //     reviews: plays[i].reviews
                // })

                /*plays[i].title = playProps.title
                plays[i].theatre = playProps.theatre
                plays[i].category = playProps.category
                plays[i].link = playProps.link
                plays[i].description = playProps.description*/

                this.props.editPlay(this.props.id as string, { ...playProps, id: this.props.id })

                this.props.changeEditing(this.props.editing)

                this.props.history.push(`/plays/${playProps.title}`)

                return;

            }
        }

        this.setState(stateResult);

    }

    render() {
        if (this.state.playSubmitted) {
            return (
                <div>
                    <h1>Pomyślnie dodano sztukę {this.state.title}</h1>
                    <Link to='/plays'>
                        <button
                            className='btn btn-default'
                            type='button'>
                            Wróć do listy spektakli
                        </button>
                    </Link>
                </div>
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {!this.props.editing && <h1>
                            Dodaj spektakl
                            </h1>}
                        {!this.props.editing &&
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
                                            onClick={this.addPlay}>
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
                            </form>}
                        {!!this.props.editing &&
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
                                            onChange={this.onTitleChange} />
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
                                            onChange={this.onDescriptionChange} />
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
                                            onClick={this.editPlay}>
                                            <strong>Zapisz zmiany</strong>
                                        </button>
                                    </div>
                                    <div className="col-md-4" />
                                </div>
                            </form>}
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
    linkError: boolean,
    playSubmitted: boolean,
    playEdited: boolean
}

interface AddPlayScreenProps extends PlayEntity {
    editing: boolean,
    addPlay: (play: PlayEntity) => void;
    editPlay: (id: string, play: PlayEntity) => void;
    changeEditing: (editing: boolean) => void;
    allPlays: PlayEntity[]
}

const mapDispatchToProps = (dispatch: (arg: any) => void) => ({
    addPlay: (play: PlayEntity) => dispatch({ type: PlaysActionNames.ADD_PLAY, play }),
    editPlay: (id: string, play: PlayEntity) => dispatch({ type: PlaysActionNames.EDIT_PLAY, id, play }),
    changeEditing: (editing: boolean) => dispatch({ type: EditingActionNames.CHANGE_EDITING, editing })
});

const mapStateToProps = (state: State) => ({
    allPlays: mapObjectToArray(state.plays),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddPlayForm));