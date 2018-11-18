import * as React from 'react'
import roles from 'src/database/rolesDatabase'

function RolesListComponent () {
    return (
        <select className='form-control' id='roleName'>
            {roles.map((role, index) => 
                <option key={role + index}>
                    {role}
                </option>)}
        </select>
    )
}

export default RolesListComponent