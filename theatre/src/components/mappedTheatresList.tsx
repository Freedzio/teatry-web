import * as React from 'react'
import { TheatreEntity } from 'src/theatres/theatres.state';
import { mapObjectToArray } from 'src/common/mapObjectToArray';
import { connect } from 'react-redux';
import { State } from 'src/state';
import * as _ from 'lodash';

function MappedTheatresListComponent(props: MappedTheatresListComponentProps) {
    return (
        <>
            <option>Wybierz teatr...</option>
            {
                props.theatres.map((theatre, index) =>
                    <option key={theatre.name + index}>
                        {theatre.name}
                    </option>
                )
            }
        </>
    )
}

export interface MappedTheatresListComponentProps {
    theatres: TheatreEntity[];
}

const mapStateToProps = (state: State) => ({
    theatres: mapObjectToArray(state.theatres)
})

export default connect(mapStateToProps, _.noop)(MappedTheatresListComponent)