import users from 'src/database/usersDatabase'
import * as React from 'react';

function UsersComponent() {
    return (
        <select className='form-control' id='userName'>
            {users.map((user, index) =>
                <option key={user.email + index}>
                    {user.email}
                </option>
            )}
        </select>
    )
}

export default UsersComponent