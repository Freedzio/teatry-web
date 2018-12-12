import * as React from 'react'
import plays from 'src/database/playsDatabase'
import { Route } from 'react-router-dom'
import PlayDetailsScreen from 'src/screens/playDetailsScreen'
import { AddTicketForm } from 'src/forms/addTicketForm';
import { connect } from 'react-redux';
import { State } from 'src/state';

export class MappedPlaysDetailsComponent extends React.Component<MappedPlaysDetailsProps> {
    render() {
        return (
            <>
                {plays.map(({ title, description, category, link, tickets, reviews }) => (
                    <>
                        <Route
                            exact path={`/plays/${title}`}
                            render={() =>
                                <PlayDetailsScreen
                                    title={title}
                                    description={description}
                                    category={category}
                                    link={link}
                                    tickets={tickets}
                                    reviews={reviews}
                                />}
                        />
                        <Route
                            exact path={`/plays/${title}/addTicket`}
                            render={() =>
                                <AddTicketForm
                                    title={title}
                                    user={this.props.user}
                                />}
                        />
                    </>
                ))
                }
            </>
        )
    }
}

interface MappedPlaysDetailsProps {
    user: string
}

const mapDispatchToProps = () => ({})

export default connect((state: State) => ({
    user: state.session.email
}), mapDispatchToProps)(MappedPlaysDetailsComponent)