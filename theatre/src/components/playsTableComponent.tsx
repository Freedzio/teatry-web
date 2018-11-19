import * as React from 'react'
import plays from 'src/database/playsDatabase'
import { Link } from 'react-router-dom'

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
                        <td><Link to={'/plays/${play.title}'}><strong>{play.title}</strong></Link></td>
                        <td>{play.category}</td>
                        <td>{play.theatre}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default PlaysTableComponent
