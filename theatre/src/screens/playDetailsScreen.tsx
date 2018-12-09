import * as React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { State } from 'src/state';

export class PlayDetailsScreen extends React.Component<PlayDetailsScreenProps, PlayDetailsScreenState>{
    constructor(props: any) {
        super(props);
        this.state = {
            isEditing: false,
            title: this.props.title,
            description: this.props.description,
            category: this.props.category,
            link: this.props.link
        }
    }

    toggleEdit() {
        this.setState({ isEditing: !this.state.isEditing })
    }

    render() {
        if (this.state.isEditing) {
            return (
                <div>
                    <h1> Edycja spektaklu</h1>
                    <button
                        type='button'
                        className='btn btn-default'
                        onClick={this.toggleEdit.bind(this)}>
                        Edytuj dane spektaklu
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
                        <p><strong>
                        <Link to='/plays'>
                                Wróc do listy spektakli
                            </Link>
                            {!!this.props.isAdmin && <span> | <button
                                type='button'
                                className='btn btn-default'
                                onClick={this.toggleEdit.bind(this)}>
                                Edytuj dane spektaklu
                            </button> | <a href='#'>
                                Usuń spektakl  </a> </span>}

                        </strong></p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>
                            Bilety
                        </h1>
                        <a href='#'><strong>
                            Dodaj bilet
                        </strong></a>
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
                                {/*<tr>
                                    <td>{this.props.ticketAuthor}</td>
                                    <td>{this.props.ticketType}</td>
                                    <td>{this.props.ticketPrice}</td>
                                    <td><strong>Usuń</strong></td>
                                </tr>
                                <tr>
                                    <td>Patrycja</td>
                                    <td>Studencki</td>
                                    <td>40,00 zł</td>
                                    <td><strong>Usuń</strong></td>
                                </tr>*/}


                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>
                            Recenzje
                        </h1>
                        <a href='#'><strong>
                            Dodaj recenzję
                        </strong></a>
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
                                <tr>
                                    <td>5</td>
                                    <td>Mocna sztuka! Porusza tematy, o których często się nie mówi, do tego bardzo wzruszająco okazane, polecam z czystym sercem :)</td>
                                    <td>Jan</td>
                                    <td><strong>Usuń</strong></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Fajne, ale czuję niedosyt</td>
                                    <td>Patrycja</td>
                                    <td><strong>Usuń</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

interface PlayDetailsScreenProps {
    title: string,
    description: string,
    category: string,
    link: string,
    isAdmin: boolean,
    ticketAuthor: string,
    ticketType: string,
    ticketPrice: string
}


interface PlayDetailsScreenState {
    isEditing: boolean,
    title: string,
    description: string,
    category: string,
    link: string
}

const mapDispatchToProps = () => ({})

export default connect((state: State) => ({
    isAdmin: state.session.role === 'Administrator'
}), mapDispatchToProps)(PlayDetailsScreen);