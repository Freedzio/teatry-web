import * as React from 'react';

interface State {
    isLoggedIn: boolean;
}

export default class LoginControl extends React.Component<State, any> {
    constructor(props: any) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false} 
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render () {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <div>isLoggedIn={isLoggedIn}
            {button}
            </div>
        );
    }
}

function LogoutButton (props) {
        return (
            <button onClick={props.onClick}>
            Wyloguj się
            </button>
        );
    
}

function LoginButton (props) {
        return (
            <button onClick={props.onClick}>
            Zaloguj się</button>
        );
}