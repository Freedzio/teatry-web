import users from 'src/database/usersDatabase'
import * as React from 'react';

function UsersListComponent() {
    return (
        <>
            <option>Wybierz użytkownika...</option>
            {
                users.map((user, index) =>
                    <option key={user.email + index}>
                        {user.email}
                    </option>
                )
            }
        </>
    )
}

export default UsersListComponent