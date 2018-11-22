import * as React from 'react'
import plays from 'src/database/playsDatabase'
import { Route } from 'react-router-dom'
import PlayDetailsScreen from 'src/screens/playDetailsScreen'



function MappedPlaysDetailsComponent() {
    return (
        <div>
            {plays.map(({ title, description, category, link }) => (
                <Route
                    exact path={`/plays/${title}`}
                    render={() =>
                        <PlayDetailsScreen
                            title={title}
                            description={description}
                            category={category}
                            link={link}
                        />}
                />
            ))
            }
        </div>
    )
}

export default MappedPlaysDetailsComponent