import * as React from 'react';
import {Link} from 'react-router-dom';

export default class TheatreForm extends React.Component {
    render () {
        return (
            
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>
                                Dodawanie teatru
                            </h1>
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <div className="col-md-3" />
                                    <label htmlFor="inputName" className="control-label col-md-2">
                                        Nazwa
                                    </label>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" id="inputName" />
                                        <span className="help-block">
                                            Pole wymagane
                                        </span>
                                    </div>
                                    <div className="col-md-3" />
                                </div> 
                                <div className="form-group">
                                    <div className="col-md-3" />
                                    <label htmlFor="descName" className="control-label col-md-2">
                                        Opis
                                    </label>
                                    <div className="col-md-3">
                                        <textarea className="form-control" rows={3} id="descName" />
                                    </div>
                                    <div className="col-md-3" />
                                </div>
                                <div className="form-group">
                                    <div className="col-md-3" />
                                    <label htmlFor="townName" className="control-label col-md-2">
                                        Miasto
                                    </label>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" id="townName" />
                                        <span className="help-block">
                                            Pole wymagane
                                        </span>
                                    </div>
                                    <div className="col-md-3" />
                                </div>
                                <div className="form-group">
                                    <div className="col-md-3" />
                                    <label htmlFor="contactName" className="control-label col-md-2">
                                        Kontakt
                                    </label>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" id="contactName" />
                                    </div>
                                    <div className="col-md-3" />
                                </div>
                                <div className="form-group">
                                    <div className="col-md-3" />
                                    <label htmlFor="linkName" className="control-label col-md-2">
                                        Link do strony teatru
                                    </label>
                                    <div className="col-md-3">
                                        <input type="url" className="form-control" id="linkName" />
                                    </div>    
                                    <div className="col-md-3" />
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5" />
                        <div className="col-md-3">
                            <button type="button" className="btn btn-default">
                                <strong>Dodaj teatr</strong>    
                            </button>
                        </div>
                        <div className="col-md-4" />
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p>
                                <strong><Link to='/theatres'>Wróc do listy teatrów</Link></strong>
                            </p>
                        </div>
                    </div>
                </div>            
        )
    }
}