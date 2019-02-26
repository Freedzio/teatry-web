import * as React from 'react'
import { Route, withRouter } from 'react-router-dom'
import PlayDetailsScreen from 'src/screens/playDetailsScreen'
import { PlayEntity } from 'src/plays/Plays.state';
import { State } from 'src/state';
import { connect } from 'react-redux';
import { mapObjectToArray } from 'src/common/mapObjectToArray';

function MappedPlaysDetailsComponent(props: MappedPlaysDetailsComponentProps) {
    return (
        <>
            {
                props.plays.map(({ id, title, theatre, description, category, link }) => (
                    <Route
                        exact path={`/plays/${title}`}
                        render={() =>
                            <PlayDetailsScreen
                                id={id as string}
                                title={title}
                                theatre={theatre}
                                description={description}
                                category={category}
                                link={link}
                                tickets={[] as any}
                                reviews={[] as any}
                            />
                        }
                    />
                ))
            }
        </>
    )
}

export interface MappedPlaysDetailsComponentProps {
    plays: PlayEntity[];
}

const mapStateToProps = (state: State) => ({
    plays: mapObjectToArray(state.plays)
})

export default connect(mapStateToProps)(withRouter(MappedPlaysDetailsComponent as any))

