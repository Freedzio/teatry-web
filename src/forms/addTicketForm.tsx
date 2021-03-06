import * as React from 'react'
import plays from 'src/database/playsDatabase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { State } from 'src/state';

export class AddTicketForm extends React.Component<AddTicketProps, AddTicketState> {
    constructor(props: any) {
        super(props);

        this.state = {
            type: '',
            price: '',
            typeError: false,
            priceError: false,
            ticketSubmitted: false
        }
    }

    onTypeChange(event: any) {
        this.setState({
            type: event.target.value
        })
    }

    onPriceChange(event: any) {
        this.setState({
            price: event.target.value
        })
    }

    private addTicket(event: any) {

        var ticketProps = {
            user: this.props.user,
            type: this.state.type,
            price: this.state.price
        }

        var stateResult = {
            typeError: false,
            priceError: false,
            ticketSubmitted: false
        }

        if (this.state.type === '') {
            stateResult = {
                ...stateResult,
                typeError: true
            }
        }

        if (this.state.price === '') {
            stateResult = {
                ...stateResult,
                priceError: true
            }
        }

        for (var i = 0; i < plays.length; i++) {

            if (this.props.title === plays[i].title
                && stateResult.typeError === false
                && stateResult.priceError === false) {

                plays[i].tickets.push({
                    user: ticketProps.user,
                    type: ticketProps.type,
                    price: ticketProps.price
                })

                stateResult = {
                    ...stateResult,
                    ticketSubmitted: true
                }
            }
        };

        this.setState(stateResult)
    }

    render() {
        if (this.state.ticketSubmitted) {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4' />
                        <div className='col-md-4'>
                            <h1>
                                Bilet dodany pomyślnie!
                            </h1>
                            <Link to={`/plays/${this.props.title}`}>
                                <button className='btn btn-default' type='button'>
                                    Wróc do strony spektaklu
                                </button>
                            </Link>
                        </div>
                        <div className='col-md-4' />
                    </div>
                </div >
            )
        }


        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>
                            Dodaj bilet na spektakl {this.props.title}
                        </h1>
                        <form className='form-horizontal'>
                            <div className='form-group'>
                                <div className='col-md-3' />
                                <label htmlFor='typeName' className='control-label col-md-2'>
                                    Rodzaj biletu
                                </label>
                                <div className='col-md-3'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='typeName'
                                        onChange={this.onTypeChange.bind(this)} />
                                </div>
                                <div className='col-md-3' />
                            </div>
                            <div className='form-group'>
                                <div className='col-md-3' />
                                <label htmlFor='priceAmount' className='control-label col-md-2'>
                                    Cena biletu
                                </label>
                                <div className='col-md-3'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='priceAmount'
                                        onChange={this.onPriceChange.bind(this)} />
                                </div>
                                <div className='col-md-3' />
                            </div>
                            <div className='row'>
                                <div className='col-md-5' />
                                <div className='col-md-3'>
                                    {!!this.state.typeError && <div>Wpisz rodzaj biletu</div>}
                                    {!!this.state.priceError && <div>Podaj cenę biletu</div>}
                                    <button
                                        type='button'
                                        className='btn btn-default'
                                        onClick={this.addTicket.bind(this)}>
                                        Dodaj bilet</button>
                                    <div>
                                        <Link to={`/plays/${this.props.title}`}>
                                            Wróc do strony spektaklu
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-md-4' />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}



interface AddTicketProps {
    title: string,
    user: string
}

interface AddTicketState {
    type: string,
    price: string,
    typeError: boolean,
    priceError: boolean,
    ticketSubmitted: boolean
}

const mapDispatchToProps = () => ({})

export default connect((state: State) => ({
    user: state.session.email
}), mapDispatchToProps)(AddTicketForm);