import * as React from 'react'

export default class DeleteTicketScreen extends React.Component<DeleteTicketScreenProps> {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Czy na pewno chcesz usunąć ten bilet na spektakl {this.props.title}?</h1>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Użytkownik</th>
                                    <th>Rodzal biletu (np. ulgowy)</th>
                                    <th>Cena</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.props.user}</td>
                                    <td>{this.props.type}</td>
                                    <td>{this.props.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

interface DeleteTicketScreenProps {
    title: string,
    user: string,
    type: string,
    price: string
}




