import * as React from 'react';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {
    render () {
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>
                                Zaloguj
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <h4>
                                Zaloguj się za pomocą konta lokalnego
                            </h4>
                            <div className="row">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label htmlFor="userEmail" className="control-label col-md-4">
                                            Adres e-mail
                                        </label>
                                        <div className="col-md-4">
                                            <input type="email" className="form-control" id="userEmail" />
                                        </div>
                                        <div className="col-md-4" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="userPassword" className="control-label col-md-4">
                                            Hasło
                                        </label>
                                        <div className="col-md-4">
                                            <input type="password" className="form-control" id="userPassword" />
                                        </div>
                                        <div className="col-md-4" />
                                    </div>
                                    <div className="checkbox">
                                        <div className="col-md-4" />
                                        <label><input type="checkbox" />Zapamiętać Cię?</label>
                                    </div>   
                                    <div className="col-md-12">
                                        <div className="col-md-4" />
                                        <div className="col-md-4">
                                            <br />
                                            <button type="button" className="btn btn-default">Zaloguj</button>
                                            <br /> 
                                        </div> 
                                        <div className="col-md-4" />
                                    </div>                                           
                                </form>
                            </div>
                            <div className="col-md-12">
                                <p>
                                    <br />
                                    <strong><Link to='/register'>Zarejestruj się jako nowy użytkownik</Link></strong>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h4>Zaloguj się za pomocą innej usługi</h4>
                            <br />
                            <Link to='/googleLogin'>
                                <button type="button" className="btn btn-default">Google</button>
                            </Link>
                            <span>  </span>
                            <button type="button" className="btn btn-default">Facebook</button>
                        </div>
                    </div>
                </div>
        )
    }
}