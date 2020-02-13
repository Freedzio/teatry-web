import * as React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { State } from 'src/state';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { PlayEntity } from 'src/plays/plays.state';
import { mapObjectToArray } from 'src/common/mapObjectToArray';

function PlaysTableComponent(props: PlaysTableComponentProps) {
    console.log(props);

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Tytuł</th>
                    <th>Kategoria</th>
                    <th>Teatr</th>
                </tr>
            </thead>
            <tbody>
                {props.plays.map((play, index) =>
                    <tr key={play.title + play.theatre + index}>
                        <td><Link to={`/plays/${play.title}-${play.theatre}`}><strong>{play.title}</strong></Link></td>

                        <td>{play.category}</td>
                        <td>{play.theatre}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export interface PlaysTableComponentProps {
    plays: PlayEntity[];
}

const mapStateToProps = (state: State) => ({
    plays: mapObjectToArray(state.plays)
})

export default connect(mapStateToProps, _.noop)(withRouter(PlaysTableComponent as any))
