import * as React from 'react';
import { Link } from 'react-router-dom';
import RolesTableComponent from 'src/components/rolesTableComponent';

export default class RolesScreen extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>
                            Role użytkowników
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            <Link to='/roles/addRole'>Dodaj rolę</Link>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <Link to='/roles/roleAssign'>Przypisz rolę do użytkownika</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <RolesTableComponent />
                    </div>
                </div>
            </div>
        )
    }
}