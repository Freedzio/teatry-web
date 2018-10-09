import * as React from 'react';

export default class RoleAssign extends React.Component {
    render () {
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
                                    <select className="form-control" id="roleName">
                                        <option>Admin</option>
                                        <option>Moderator</option>
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
                                    <select className="form-control" id="userName">
                                        <option>ala@wp.pl</option>
                                        <option>dyzio@gmail.com</option>
                                        <option>basia@amorki.pl</option>
                                        <option>durczok-kamil@tvn.pl</option>
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
                         <button type="button" className="btn btn-default">
                            Przypisz rolę
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <a href="#"><strong>Wróc do panelu administratora</strong></a>
                    </div>
                </div>
            </div>
        )
    }
}