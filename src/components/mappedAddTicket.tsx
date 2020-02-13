import * as React from 'react'
import plays from 'src/database/playsDatabase'
import { Route } from 'react-router-dom'
import { AddTicketForm } from 'src/forms/addTicketForm';
import { State } from 'src/state';
import { connect } from 'react-redux';
import { mapObjectToArray } from 'src/common/mapObjectToArray';
import { PlayEntity } from 'src/plays/Plays.state';

class MappedAddTicket extends React.Component<MappedAddTicketProps> {
    render() {
        return (
            <>
                {
                    plays.map(({ title, theatre }) => (
                        <Route
                            exact path={`/plays/${title}-${theatre}/addTicket`}
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
    user: string,
    plays: PlayEntity[]
}

const mapDispatchToProps = () => ({})

export default connect((state: State) => ({
    user: state.session.email,
    plays: mapObjectToArray(state.plays)
}), mapDispatchToProps)(MappedAddTicket)