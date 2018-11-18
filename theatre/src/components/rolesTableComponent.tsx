import * as React from 'react'
import roles from 'src/database/rolesDatabase'

function RolesTableComponent() {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Nazwa roli</th>
                </tr>
            </thead>
            <tbody>
                {roles.map((role, index) =>
                    <tr key={role + index}>
                        <td>{role}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default RolesTableComponent