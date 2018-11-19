import * as React from 'react';
import { Link } from 'react-router-dom';
import UsersListComponent from 'src/components/usersListComponent';
import RolesListComponent from 'src/components/rolesListComponent';

export default class RoleAssignScreen extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Przypisywanie roli użytkownikom</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <div className="col-md-1" />
                                <label htmlFor="roleName" className="control-label col-md-3">
                                    <strong>Wybierz rolę</strong>
                                </label>
                                <div className="col-md-4">
                                    <RolesListComponent />
                                </div>
                                <div className="col-md-4" />
                            </div>
                            <div className="form-group">
                                <div className="col-md-1" />
                                <label htmlFor="userName" className="control-label col-md-3">
                                    <strong>Wybierz użytkownika</strong>
                                </label>
                                <div className="col-md-4">
                                    <UsersListComponent />
                                </div>
                                <div className="col-md-4" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4" />
                    <div className="col-md-8">
                        <button type="button" className="btn btn-default">
                            Przypisz rolę
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Link to='/roles'><strong>Wróc do panelu administratora</strong></Link>
                    </div>
                </div>
            </div>
        )
    }
}