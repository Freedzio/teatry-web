import * as React from 'react';
import { Link } from 'react-router-dom';
import UsersListComponent from 'src/components/usersListComponent';
import RolesListComponent from 'src/components/rolesListComponent';
import users from 'src/database/usersDatabase';

export default class RoleAssignScreen extends React.Component<RoleAssignScreenProps, RoleAssignScreenState> {
    constructor(props: any) {
        super(props);

        this.state = {
            chosenUser: '',
            roleToAssign: ''
        }
    }

    onUserChange(event: any) {
        this.setState({
            chosenUser: event.target.value
        })
    }

    onRoleChange(event: any) {
        this.setState({
            roleToAssign: event.target.value
        })
    }

    private assignRole(event: any) {
        let assigningProps = {
            chosenUser: this.state.chosenUser,
            roleToAssign: this.state.roleToAssign
        }

        let stateResult = {
            userError: false,
            roleError: false
        }

        if (this.state.chosenUser === 'Wybierz użytkownika...') {
            stateResult = {
                ...stateResult,
                userError: true
            }
        }

        if (this.state.roleToAssign === 'Wybierz rolę...') {
            stateResult = {
                ...stateResult,
                roleError: true
            }
        }

        for (var i = 0; i < users.length; i++) {
            if (this.state.chosenUser === users[i].email ) {
                users[i].role = assigningProps.roleToAssign
                this.props.history.push('/roles')
            }
        }
    }

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
                                    <select
                                        className='form-control'
                                        id='roleName'
                                        onChange={this.onRoleChange.bind(this)}>
                                        <RolesListComponent />
                                    </select>
                                </div>
                                <div className="col-md-4" />
                            </div>
                            <div className="form-group">
                                <div className="col-md-1" />
                                <label htmlFor="userName" className="control-label col-md-3">
                                    <strong>Wybierz użytkownika</strong>
                                </label>
                                <div className="col-md-4">
                                    <select
                                        className='form-control'
                                        id='userName'
                                        onChange={this.onUserChange.bind(this)}>
                                        <UsersListComponent />
                                    </select>
                                </div>
                                <div className="col-md-4" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4" />
                    <div className="col-md-8">
                        <button 
                        type="button" 
                        className="btn btn-default"
                        onClick={this.assignRole.bind(this)}>
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

interface RoleAssignScreenProps {
    history: any
}

interface RoleAssignScreenState {
    chosenUser: string,
    roleToAssign: string
}