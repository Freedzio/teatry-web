import * as React from 'react'
import users from './users';

export default class UsersList extends React.Component {
    render() {
        let usersListOptions = []

        for (var i = 0; i < users.length; i++) {
            usersListOptions.push(
                <option>
                    {users[i].email}
                </option>
            );
        }

        return (
            <select className="form-control" id="userName">
            {usersListOptions}
            </select>
        )
    }
}