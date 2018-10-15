import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

export default class AddRole extends React.Component {
    render () {
        return (
            <Router>
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
                                                <input type='text' id='addRole' className='form-control' />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <button type='button' className='btn btn-default'>
                                Dodaj rolę
                            </button>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}