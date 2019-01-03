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
                {theatres.map(({ name, description, town, contact, link}, index) =>
                    <tr key={name + town + index}>
                        <td>{name}</td>
                        <td>{town}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default TheatresTableComponent