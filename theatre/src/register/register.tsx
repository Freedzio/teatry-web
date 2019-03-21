import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { UsersActionNames } from 'src/users/users.actions';
import { UserEntity, UsersState } from 'src/users/users.state';
import { generateGuid } from 'src/common/guid';
import { mapObjectToArray } from 'src/common/mapObjectToArray';

export class RegisterScreen extends React.Component<RegisterScreenProps, RegisterScreenState> {
    constructor(props: any) {
        super(props);

        this.state = {
            regEmail: '',
            regPassword: '',
            regConfirmPassword: '',
            regRole: '',
            isRegisterError: false,
            emailError: false,
            passwordError: false,
            passwordConfirmError: false,
            passwordMatchError: false
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

        if (this.state.isRegisterError) {
            this.setState({
                isRegisterError: false
            })
        }

        const registerProps = {
            email: this.state.regEmail,
            password: this.state.regPassword,
            role: ''
        };

        for (var i = 0; i < this.props.allUsers.length; i++) {

            if (this.state.regEmail === this.props.allUsers[i].email
                || this.state.regPassword !== this.state.regConfirmPassword) {
                this.setState({
                    isRegisterError: true
                })

                return;

            } else this.setState({ isRegisterError: false })
        }

        let stateResult = {
            isRegisterError: false,
            emailError: false,
            passwordError: false,
            passwordConfirmError: false,
            passwordMatchError: false
        }

        if (this.state.regEmail === '') {
            stateResult = {
                ...stateResult,
                emailError: true
            }
        }

        if (this.state.regPassword === '') {
            stateResult = {
                ...stateResult,
                passwordError: true
            }
        }

        if (this.state.regConfirmPassword === '') {
            stateResult = {
                ...stateResult,
                passwordConfirmError: true
            }
        }

        if (this.state.regConfirmPassword !== this.state.regPassword) {
            stateResult = {
                ...stateResult,
                passwordMatchError: true
            }
        }

        if (stateResult.isRegisterError === false
            && stateResult.emailError === false
            && stateResult.passwordError === false
            && stateResult.passwordConfirmError === false
            && stateResult.passwordMatchError === false) {

            registerProps.role = 'user'

            this.props.addUser({ ...registerProps, id: generateGuid() })

            this.props.history.push('/')
        }

        this.setState(stateResult);
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
                {!!this.state.isRegisterError && <div>Taki email jest już w bazie lub podane hasła są nieprawidłowe</div>}
                {!!this.state.emailError && <div>Podaj adres e-mail</div>}
                {!!this.state.passwordError && <div>Podaj hasło</div>}
                {!!this.state.passwordConfirmError && <div> Podane hasła nie zgadzają się</div>}
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

interface RegisterScreenProps extends UserEntity {
    history: any;
    regEmail: string;
    regPassword: string;
    regRole: string;
    emailError: boolean,
    passwordError: boolean,
    passwordConfirmError: boolean,
    addUser: (user: UserEntity) => void;
    allUsers: UserEntity[]
}

interface RegisterScreenState {
    regEmail: string;
    regPassword: string;
    regConfirmPassword: string;
    regRole: string;
    isRegisterError: boolean;
    emailError: boolean,
    passwordError: boolean,
    passwordConfirmError: boolean,
    passwordMatchError: boolean
}

const mapDispatchToProps = (dispatch: (arg: any) => void, ownProps: RegisterScreenProps) => ({
    addUser: (user: UserEntity) => dispatch({ type: UsersActionNames.ADD_USER, user })
})

const mapStateToProps = (state: UsersState) => ({
    allUsers: mapObjectToArray(state.users),
})

const RegisterRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(RegisterScreen));

export default RegisterRedux