import * as React from 'react'
import { State } from 'src/state';
import { mapObjectToArray } from 'src/common/mapObjectToArray';
import { TheatreEntity } from 'src/theatres/theatres.state';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as _ from 'lodash';

function TheatresTableComponent(props: TheatresTableComponentProps) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Miasto</th>
                </tr>
            </thead>
            <tbody>
                {props.theatres.map(({ name, description, town, contact, link }, index) =>
                    <tr key={name + town + index}>
                        <td>{name}</td>
                        <td>{town}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export interface TheatresTableComponentProps {
    theatres: TheatreEntity[];
}

const mapStateToProps = (state: State) => ({
    theatres: mapObjectToArray(state.theatres)
})

export default connect(mapStateToProps, _.noop)(withRouter(TheatresTableComponent as any))