import * as React from 'react';

export default class Roles extends React.Component {
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
                            <a href="#">Dodaj rolę</a>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <a href="#">Przypisz rolę do użytkownika</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Nazwa roli</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Admin</td>
                                </tr>
                                <tr>
                                    <td>Moderator</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}