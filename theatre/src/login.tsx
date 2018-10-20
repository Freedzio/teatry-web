import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SessionActionNames } from './session/sesion.actions';
import { __values } from 'tslib';
import users from './users';

export class Login extends React.Component<LoginScreenProps, LoginScreenState>{
    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isLoggedIn: false,
            isError: false,
        };
    }

    onEmailChange(event: any) {
        this.setState({
            email: event.target.value
        })
    }

    onPasswordChange(event: any) {
        this.setState({
            password: event.target.value
        })
    }

    private login(event: any) {
        for (var i = 0; i < users.length; i++) {
            if (this.state.email === users[i].email && this.state.password === users[i].password) {
                this.props.setSession(this.state.email, this.state.password);
                this.props.history.push('/');
                break;
            } else this.setState({
                isError: true
            })
        }
    }

    render() {
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
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="userEmail"
                                            onChange={this.onEmailChange.bind(this)}
                                        />
                                    </div>
                                    <div className="col-md-4" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userPassword" className="control-label col-md-4">
                                        Hasło
                                        </label>
                                    <div className="col-md-4">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="userPassword"
                                            onChange={this.onPasswordChange.bind(this)}
                                        />
                                    </div>
                                    <div className="col-md-4" />
                                </div>
                                <div className="checkbox">
                                    <div className="col-md-4" />
                                    <label><input type="checkbox" />Zapamiętać Cię?</label>
                                </div>
                                {!!this.state.isError && <span>Error</span>}
                                <div className="col-md-12">
                                    <div className="col-md-4" />
                                    <div className="col-md-4">
                                        <br />
                                        <button
                                            type="button"
                                            className="btn btn-default"
                                            onClick={this.login.bind(this)}>
                                            Zaloguj
                                        </button>
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

interface LoginScreenState {
    email: string;
    password: string;
    isLoggedIn: boolean;
    isError: boolean;
}

interface LoginScreenProps {
    history: any;
    setSession: (email: string, password: string) => void;
    isError: boolean;
}

{/*
    var users = [
    { email: 'basia@wp.pl', password: 'qwer' },
    { email: 'kasia@wp.pl', password: '1234' },
    { email: 'misiaczek@buziaczek.pl', password: 'dupa' },
    { email: 'admin@admin.pl', password: 'admin' }
]

*/}

const mapDispatchToProps = (dispatch: (arg: any) => void, ownProps: LoginScreenProps) => ({
    setSession: (email: string, password: string) => dispatch({ type: SessionActionNames.SESSION_SET, email, password })
});

const mapStateToProps = () => ({})

const LoginRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Login));

export default LoginRedux