import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SessionActionNames } from 'src/session/sesion.actions';
import { __values } from 'tslib';
import users from 'src/database/usersDatabase';

export class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState>{
    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: '',
            role: '',
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

        const sessionProps = {
            email: this.state.email,
            password: this.state.password,
            role: ''
        };

        for (var i = 0; i < users.length; i++) {
            if (this.state.email === users[i].email && this.state.password === users[i].password) {
                sessionProps.role = users[i].role

                this.props.setSession(sessionProps.email, sessionProps.password, sessionProps.role);
                this.props.history.push('/');

                break;

            } else this.setState({
                isError: true
            });
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
    role: string;
    isLoggedIn: boolean;
    isError: boolean;
}

interface LoginScreenProps {
    history: any;
    email: string;
    password: string;
    role: string;
    setSession: (email: string, password: string, role: string) => void;
}

const mapDispatchToProps = (dispatch: (arg: any) => void, ownProps: LoginScreenProps) => ({
    setSession: (email: string, password: string, role: string) => dispatch({ type: SessionActionNames.SESSION_SET, email, password, role })
});

const mapStateToProps = () => ({})

const LoginRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(LoginScreen));

export default LoginRedux