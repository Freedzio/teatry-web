import * as React from 'react'
import plays from 'src/database/playsDatabase'
import { Route } from 'react-router-dom'
import { AddTicketForm } from 'src/forms/addTicketForm';
import { State } from 'src/state';
import { connect } from 'react-redux';

class MappedAddTicket extends React.Component<MappedAddTicketProps> {
    render() {
        return (
            <>
                {
                    plays.map(({ title }) => (
                        <Route
                            exact path={`/plays/${title}/addTicket`}
                            render={() =>
                                <AddTicketForm
                                    title={title}
                                    user={this.props.user}
                                />
                            }
                        />
                    ))
                }
            </>
        )
    }
}

interface MappedAddTicketProps {
    user: string
}

const mapDispatchToProps = () => ({})

export default connect((state: State) => ({
    user: state.session.email
}), mapDispatchToProps)(MappedAddTicket)