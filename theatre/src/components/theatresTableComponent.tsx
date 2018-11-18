import theatres from 'src/database/theatresDatabase'
import * as React from 'react'

function TheatresTableComponent() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Miasto</th>
                </tr>
            </thead>
            <tbody>
                {theatres.map((theatre, index) =>
                    <tr key={theatre.name + theatre.town + index}>
                        <td>{theatre.name}</td>
                        <td>{theatre.town}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default TheatresTableComponent