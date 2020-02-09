import * as React from 'react';
import roles from 'src/database/rolesDatabase'

export default class AddRoleForm extends React.Component<AddRoleScreenProps, AddRoleScreenState> {

    constructor(props: any) {
        super(props);

        this.state = {
            role: '',
            isError: false            
        };
    }

    onRoleChange(event: any) {
        this.setState({
            role: event.target.value
        })
    }

    private addRole(event: any) {

        const roleProps = this.state.role

        for (var i = 0; i < roles.length; i++) {
            if (this.state.role === roles[i]) {
                this.setState({
                    isError: true
                });

                return;
            }
        }

        if (this.state.isError === false) {
            roles.push(
                roleProps
            )

            this.props.history.push('/roles')
        }
    }


    render() {
        return (
            <div className="container">
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>
                            Dodaj rolę
                            </h1>
                        <div className='panel panel-default'>
                            <div className='panel-body'>
                                <form className="form=horizontal">
                                    <div className='form-group'>
                                        <label htmlFor="addRole" className='control-label col-md-7'>
                                            Podaj nazwę roli, którą chcesz dodać
                                            </label>
                                        <div className='col-md-5'>
                                            <input
                                             type='text'
                                              id='addRole'
                                               className='form-control' 
                                               onChange={this.onRoleChange.bind(this)} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {!!this.state.isError && <span>Taka rola już istnieje</span>}
                        <button
                            type='button'
                            className='btn btn-default'
                            onClick={this.addRole.bind(this)}>
                            Dodaj rolę
                            </button>
                    </div>
                </div>
            </div>
        )
    }
}

interface AddRoleScreenState {
    role: string,
    isError: boolean
}

interface AddRoleScreenProps {
    role: string,
    isError: boolean,
    history: any
}