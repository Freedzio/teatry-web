import * as React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { State } from 'src/state';
import plays from 'src/database/playsDatabase';
import AddPlayForm from 'src/forms/addPlayForm';
import { PlaysActionNames } from 'src/plays/plays.actions';
import { EditingActionNames } from 'src/editing/editing.actions';

export class PlayDetailsScreen extends React.Component<PlayDetailsScreenProps, PlayDetailsScreenState>{
    constructor(props: any) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            category: this.props.category,
            link: this.props.link
        }
        this.deleteTicket = this.deleteTicket.bind(this)
        this.deleteReview = this.deleteReview.bind(this)
    }

    toggleEdit() {
        this.props.changeEditing(this.props.editing)
    }

    deleteTicket(index: number) {
        for (var i = 0; i < plays.length; i++) {
            if (this.props.title === plays[i].title) {
                plays[i].tickets.splice(index, 1)
            }
        }
    }

    deleteReview(index: number) {
        for (var i = 0; i < plays.length; i++) {
            if (this.props.title === plays[i].title) {
                plays[i].reviews.splice(index, 1)
            }
        }
    }

    deletePlay() {
        this.props.deletePlay(this.props.id)

        this.props.history.push('/plays')
    }

    render() {
        if (this.props.editing) {
            return (
                <div>
                    <h1> Edycja spektaklu {this.props.title}</h1>
                    <AddPlayForm
                        id={this.props.id as string}
                        title={this.props.title}
                        theatre={this.props.theatre}
                        link={this.props.link}
                        category={this.props.category}
                        description={this.props.description}
                        editing={this.props.editing} />
                    <button
                        type='button'
                        className='btn btn-default'
                        onClick={this.toggleEdit.bind(this)}>
                        Anuluj edycję
                            </button>
                </div>
            )
        }

        return (
            <div className="container">
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>
                            Szczegóły
                        </h1>
                        <h3>
                            Spektakl
                        </h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-1' />
                    <div className='col-md-8'>
                        <form className='form-horizontal'>
                            <div className='form-group'>
                                <label className='control-label col-md-3'>
                                    Tytuł
                                </label>
                                <div className='col-md-9'>
                                    <p className='form-control-static'>
                                        {this.props.title}
                                    </p>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label className='control-label col-md-3'>
                                    Teatr
                                </label>
                                <div className='col-md-9'>
                                    <p className='form-control-static'>
                                        {this.props.theatre}
                                    </p>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label className='control-label col-md-3'>
                                    Opis
                                </label>
                                <div className='col-md-9'>
                                    <p className='form-control-static'>
                                        {this.props.description}

                                    </p>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label className='control-label col-md-3'>
                                    Kategoria
                                </label>
                                <div className='col-md-9'>
                                    <p className='form-control-static'>
                                        {this.props.category}

                                    </p>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label className='control-label col-md-3'>
                                    Link
                                </label>
                                <div className='col-md-9'>
                                    <p className='form-control-static'>
                                        {this.props.link}

                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-3' />
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <p>
                            <strong>
                                <Link to='/plays'>
                                    <button
                                        className='btn btn-default'>
                                        Wróc do listy spektakli
                                    </button>
                                </Link>
                                {!!this.props.isAdmin && <span> | <button
                                    type='button'
                                    className='btn btn-default'
                                    onClick={this.toggleEdit.bind(this)}>
                                    Edytuj dane spektaklu
                                    </button> | <button
                                        className='btn btn-default'
                                        onClick={this.deletePlay.bind(this)}>
                                        Usuń spektakl  </button> </span>}

                            </strong></p>

                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>
                            Bilety
                        </h1>
                        {!!this.props.isLoggedIn && <Link to={`/plays/${this.props.title}-${this.props.theatre}/addTicket`}>
                            <button className='btn btn-default'><strong>
                                Dodaj bilet
                        </strong></button></Link>}

                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Użytkownik</th>
                                    <th>Rodzal biletu (np. ulgowy)</th>
                                    <th>Cena</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.tickets.map(({ user, type, price }, index) => (
                                    <tr key={index}>
                                        <td>{user}</td>
                                        <td>{type}</td>
                                        <td>{price}</td>
                                        {!!this.props.isAdmin && <td>
                                            <button
                                                type='button'
                                                className='btn btn-default'
                                                onClick={() => { this.deleteTicket(index) }}
                                            >Usuń
                                            </button>
                                        </td>}
                                        {!this.props.isAdmin && <td></td>}
                                    </tr>
                                ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>
                            Recenzje
                        </h1>
                        {!!this.props.isLoggedIn && <Link to={`/plays/${this.props.title}/addReview`}>
                            <button type='button' className='btn btn-default'>
                                <strong>
                                    Dodaj recenzję
                                </strong>
                            </button>
                        </Link>}

                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Oceny</th>
                                    <th className='col-md-9'>Recenzje</th>
                                    <th>Użytkownik</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.reviews.map(({ user, rating, content }, index) => (
                                    <tr key={index}>
                                        <td>{rating}</td>
                                        <td>{content}</td>
                                        <td>{user}</td>
                                        {!!this.props.isAdmin && <td><button
                                            type='button'
                                            className='btn btn-default'
                                            onClick={() => this.deleteReview(index)}
                                        >Usuń
                                            </button></td>}
                                        {!this.props.isAdmin && <td></td>}
                                    </tr>
                                ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

interface PlayDetailsScreenProps {
    id: string,
    title: string,
    description: string,
    category: string,
    link: string,   
    theatre: string,
    isAdmin: boolean,
    isLoggedIn: boolean,
    tickets: [{
        user: string,
        type: string,
        price: string
    }],
    reviews: [{
        user: string,
        rating: string,
        content: string
    }],
    deletePlay: (id: string) => void;
    changeEditing: (editing: boolean) => void;
    editing: boolean,
    history: any
}


interface PlayDetailsScreenState {
    title: string,
    description: string,
    category: string,
    link: string
}

const mapDispatchToProps = (dispatch: (arg: any) => void) => ({
    deletePlay: (id: string) => dispatch({type: PlaysActionNames.DELETE_PLAY, id}),
    changeEditing: (editing: boolean) => dispatch({type: EditingActionNames.CHANGE_EDITING, editing})
});

const mapStateToProps = () => (state: State) => ({
    isAdmin: state.session.role === 'Administrator',
    isLoggedIn: state.session.email !== null && state.session.password !== null,
    editing: state.editing.editing
})

const PlayDetailsRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(PlayDetailsScreen));

export default PlayDetailsRedux
