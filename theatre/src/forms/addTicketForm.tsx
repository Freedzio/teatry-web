{/*import * as React from 'react'
import { connect } from 'react-redux';
import { State } from 'src/state';
import plays from 'src/database/playsDatabase';

export class AddTicketForm extends React.Component<AddTicketProps, AddTicketState> {
    constructor(props:any) {
        super(props);

        this.state = {
            type: '',
            price: ''
        }
    }

    onTypeChange (event: any) {
        this.setState({
            type: event.target.value
        })
    }

    onPriceChange (event: any) {
        this.setState({
            price: event.target.value
        })
    }

    private addTicket(event:any) {

        const ticketProps = {
            user: this.props.user,
            type: this.state.type,
            price: this.state.price
        }

        for (var i = 0; i < plays.tickets.length)
    }
}



interface AddTicketProps {
    history: any
    user: string
}

interface AddTicketState {
    type: string,
    price: string
}

const mapDispatchToProps = () => ({})

export default connect((state: State) => ({
    user: state.session.email
}), mapDispatchToProps)(AddTicketForm);*/}