import * as React from 'react'
import plays from 'src/database/playsDatabase';
import { Link } from 'react-router-dom';

export class AddTicketForm extends React.Component<AddTicketProps, AddTicketState> {
    constructor(props: any) {
        super(props);

        this.state = {
            type: '',
            price: ''
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
            type: this.state.type,
            price: this.state.price,
            user: this.props.user
        }

        for (var i = 0; i < plays.length; i++) {

            if (this.props.title === plays[i].title) {
                plays[i].tickets.push({
                    user: ticketProps.user,
                    type: ticketProps.type,
                    price: ticketProps.price
                })
            }
        };
    }

    render() {
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
                                <label htmlFor='titleName' className='control-label col-md-2'>
                                    Tytuł
                                </label>
                                <div className='col-md-3'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='titleName'
                                        placeholder={this.props.title}
                                        disabled />
                                </div>
                                <div className='col-md-3' />
                            </div>
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
                                    Rodzaj biletu
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
    user: string
    title: string
}

interface AddTicketState {
    type: string,
    price: string
}




/*const mapDispatchToProps = () => ({})

export default connect((state: State) => ({
    user: state.session.email
}), mapDispatchToProps)(AddTicketForm);*/