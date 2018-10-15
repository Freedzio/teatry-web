import * as React from 'react';

export default class PlayForm extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>
                            Dodaj spektakl
                        </h1>
                        <form className="form-horizontal">
                            <div className="form-group">
                                <div className="col-md-3" />
                                <label htmlFor="titleName" className="control-label col-md-2">
                                    Tytuł
                                </label>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" id="titleName" />
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
                                <label htmlFor="theatreName" className="control-label col-md-2">
                                    Wybierz teatr
                                </label>
                                <div className="col-md-3">
                                    <select className="form-control" id="theatreName">
                                        <option>Teatr Dramatyczny</option>
                                        <option>Teatr 6. Piętro</option>
                                        <option>Teatr Muzyczny Roma</option>
                                    </select>
                                    <span className="help-block">
                                        Pole wymagane
                                    </span>
                                </div>
                                <div className="col-md-3" />
                            </div>
                            <div className="form-group">
                                <div className="col-md-3" />
                                <label htmlFor="categoryName" className="control-label col-md-2">
                                    Kategoria
                                </label>
                                <div className="col-md-3">
                                    <select className="form-control" id="categoryName">
                                        <option>Komedia</option>
                                        <option>Dramat</option>
                                        <option>Musical</option>
                                        <option>Obyczajowy</option>
                                    </select>
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
                            <div className="row">
                                <div className="col-md-5" />
                                <div className="col-md-3">
                                    <button type="button" className="btn btn-default">
                                        <strong>Dodaj spektakl</strong>    
                                    </button>
                                </div>
                                <div className="col-md-4" />
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p>
                                        <strong><a href="#">Wróc do listy spektakli</a></strong>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}