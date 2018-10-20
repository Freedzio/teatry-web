import * as React from 'react';
import { SessionActionNames } from './session/sesion.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class Register extends React.Component<RegisterScreenProps, RegisterScreenState> {
    constructor(props: any) {
        super(props);

        this.state = {
            regEmail: '',
            regPassword: '',
            isRegisterError: false,
        };
    }

    onEmailChange(event: any) {
        this.setState({
            regEmail: event.target.value
        })
    }

    onPasswordChange(event: any) {
        this.setState({
            regPassword: event.target.value
        })
    }

    private register(event: any) {
        this.props.registerUser(this.state.regEmail, this.state.regPassword)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>
                            Zarejestruj się
                            </h1>
                        <h2>
                            Utwórz nowe konto
                            </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul>
                            <ul>
                                <li>Pole Imię jest wymagane</li>
                                <li>Pole Nazwisko jest wymagane</li>
                                <li>Pole Adres e-mail jest wymnagane</li>
                                <li>Pole Hasło jest wymagane</li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-md-3" />
                            <label htmlFor="userFirstName" className="control-label col-md-2">
                                Imię
                                </label>
                            <div className="col-md-3">
                                <input type="text" className="form-control" id="userFirstName" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-3" />
                            <label htmlFor="userLastName" className="control-label col-md-2">
                                Nazwisko
                                </label>
                            <div className="col-md-3">
                                <input type="text" className="form-control" id="userLastName" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-3" />
                            <label htmlFor="userEmail" className="control-label col-md-2">
                                Adres e-mail
                                </label>
                            <div className="col-md-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="userEmail"
                                    onChange={this.onEmailChange.bind(this)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-3" />
                            <label htmlFor="userPassword" className="control-label col-md-2">
                                Hasło
                                </label>
                            <div className="col-md-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="userPassword"
                                    onChange={this.onPasswordChange.bind(this)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-3" />
                            <label htmlFor="userPassword2" className="control-label col-md-2">
                                Powtórz hasło
                                </label>
                            <div className="col-md-3">
                                <input type="password" className="form-control" id="userPassword2" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-3" />
                            <label htmlFor="userGender" className="control-label col-md-2">
                                Płeć
                                </label>
                            <div className="col-md-3">
                                <select className="form-control" id="userGender">
                                    <option>Mężczyzna</option>
                                    <option>Kobieta</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-3" />
                            <label htmlFor="userTown" className="control-label col-md-2">
                                Miasto
                                </label>
                            <div className="col-md-3">
                                <input type="text" className="form-control" id="userTown" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className="col-md-5" />
                    <div className="col-md-3">
                        <button
                            type="button"
                            className="btn btn-default"
                            onClick={this.register.bind(this)}>
                            <strong>
                                Zarejestruj
                            </strong>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

interface RegisterScreenProps {
    registerUser: (regEmail: string, regPassword: string) => void;
}

interface RegisterScreenState {
    regEmail: string;
    regPassword: string;
    isRegisterError: boolean;
}

const mapDispatchToProps = (dispatch: (arg: any) => void, ownProps: RegisterScreenProps) => ({
    registerUser: (regEmail: string, regPassword: string) => dispatch({ type: SessionActionNames.REGISTER_USER, regEmail, regPassword })
});

const mapStateToProps = () => ({})

const RegisterRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Register));

export default RegisterRedux