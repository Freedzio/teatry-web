import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

export default class GoogleLogin extends React.Component {
    render () {
        return (
            <Router>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>
                                Zarejestruj
                            </h2>
                            <h2>
                                Skojarz konto Google
                            </h2>
                            <h3>
                                Formularz skojarzenia
                            </h3>
                            <br />
                            <br />
                            <p>
                                Pomyślnie uwierzytelnienie za pomocą konta Google. Wprowadź nazwę użytkownika dla tej witryny i kliknij przycisk zarejestruj, aby zakończyć logowanie
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form className="form-horizontal">
                                <div className="row">
                                    <div className="form-group">
                                        <div className="col-md-1" />
                                        <label htmlFor="userEmail" className="control-label col-md-3">
                                            Adres e-mail
                                        </label>
                                        <div className="col-md-4">
                                            <input type="email" className="form-control" id="userEmail" />
                                        </div>
                                        <div className="col-md-4" />
                                    </div>                                                              
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-md-4" />
                                <div className="col-md-8">
                                    <button type="button" className="btn btn-default">
                                        Zarejestruj
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}