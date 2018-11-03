import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import users from './users';

export class Register extends React.Component<RegisterScreenProps, RegisterScreenState> {
    constructor(props: any) {
        super(props);

        this.state = {
            regEmail: '',
            regPassword: '',
            regConfirmPassword: '',
            regRole: '',
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

    onPasswordConfirmChange(event: any) {
        this.setState({
            regConfirmPassword: event.target.value
        })
    }

    private register(event: any) {

        const registerProps = {
            regEmail: this.state.regEmail,
            regPassword: this.state.regPassword,
            regRole: this.state.regRole
        };

        for (var i = 0; i < users.length; i++) {
            if (this.state.regEmail === users[i].email || this.state.regPassword !== this.state.regConfirmPassword) {
                this.setState({
                    isRegisterError: true
                });

                break;

                

            } 
        }

        users.push({
            email: registerProps.regEmail,
            password: registerProps.regPassword,
            role: registerProps.regRole
        });
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
                            <label htmlFor="userConfirmPassword" className="control-label col-md-2">
                                Powtórz hasło
                                </label>
                            <div className="col-md-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="userConfirmPassword"
                                    onChange={this.onPasswordConfirmChange.bind(this)} />
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
                {!!this.state.isRegisterError && <span>Taki email jest już w bazie lub podane hasła są nieprawidłowe</span>}

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
    history: any;
    regEmail: string;
    regPassword: string;
    regRole: string;
    registerUser: (regEmail: string, regPassword: string, regRole: string) => void;
}

interface RegisterScreenState {
    regEmail: string;
    regPassword: string;
    regConfirmPassword: string;
    regRole: string;
    isRegisterError: boolean;
}

const mapDispatchToProps = (dispatch: (arg: any) => void, ownProps: RegisterScreenProps) => ({})

const mapStateToProps = () => ({})

const RegisterRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Register));

export default RegisterRedux