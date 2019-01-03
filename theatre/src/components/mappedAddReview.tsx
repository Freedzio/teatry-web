import * as React from 'react'
import plays from 'src/database/playsDatabase';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { State } from 'src/state';
import { AddReviewForm } from 'src/forms/addReviewForm';

class MappedAddReview extends React.Component<MappedAddReviewProps> {
    render() {
        return (
            <>
                {
                    plays.map(({ title }) => (
                        <Route
                            exact path={`/plays/${title}/addReview`}
                            render={() =>
                                <AddReviewForm
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

interface MappedAddReviewProps {
    user: string
}

const mapDispatchToProps = () => ({})

export default connect((state: State) => ({
    user: state.session.email
}), mapDispatchToProps)(MappedAddReview)
