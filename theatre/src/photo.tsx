import * as React from 'react';
import "./css/bootstrap.css";

export default class Photo extends React.Component<any, any> {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <img src="seats.jpg" />
                </div>
            </div>
        );
    }
}