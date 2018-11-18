import * as React from 'react'
import plays from 'src/database/playsDatabase'

function PlaysTableComponent() {
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
                {plays.map((play, index) =>
                    <tr key={play.title + play.theatre + index}>
                        <td><strong>{play.title}</strong></td>
                        <td>{play.category}</td>
                        <td>{play.theatre}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default PlaysTableComponent
