import * as React from 'react'
import roles from 'src/database/rolesDatabase'
function RolesListComponent() {
    return (
        <>
            <option>Wybierz rolę...</option>
            {
                roles.map((role, index) =>
                    <option key={role + index}>
                        {role}
                    </option>
                )
            }
        </>

    )
}

export default RolesListComponent