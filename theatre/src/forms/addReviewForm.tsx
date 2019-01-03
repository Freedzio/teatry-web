import * as React from 'react'
import plays from 'src/database/playsDatabase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { State } from 'src/state';

export class AddReviewForm extends React.Component<AddReviewProps, AddReviewState> {
    constructor(props: any) {
        super(props);

        this.state = {
            rating: '',
            content: '',
            ratingError: false,
            contentError: false,
            reviewSubmitted: false
        }
    }

    onRatingChange(event: any) {
        this.setState({
            rating: event.target.value
        })
    }

    onContentChange(event: any) {
        this.setState({
            content: event.target.value
        })
    }

    private addReview(event: any) {

        var reviewProps = {
            user: this.props.user,
            rating: this.state.rating,
            content: this.state.content
        }

        var stateResult = {
            ratingError: false,
            contentError: false,
            reviewSubmitted: false
        }

        if (this.state.rating === '') {
            stateResult = {
                ...stateResult,
                ratingError: true
            }
        }

        if (this.state.content === '') {
            stateResult = {
                ...stateResult,
                contentError: true
            }
        }

        for (var i = 0; i < plays.length; i++) {

            if (this.props.title === plays[i].title
                && stateResult.ratingError === false
                && stateResult.contentError === false) {

                plays[i].reviews.push({
                    user: reviewProps.user,
                    rating: reviewProps.rating,
                    content: reviewProps.content
                })

                stateResult = {
                    ...stateResult,
                    reviewSubmitted: true
                }
            }
        };

        this.setState(stateResult)
    }

    render() {
        if (this.state.reviewSubmitted) {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4' />
                        <div className='col-md-4'>
                            <h1>
                                Recenzja dodamna pomyślnie!
                            </h1>
                            <Link to={`/plays/${this.props.title}`}>
                                <button className='btn btn-default' type='button'>
                                    Wróc do strony spektaklu
                                </button>
                            </Link>
                        </div>
                        <div className='col-md-4' />
                    </div>
                </div >
            )
        }


        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>
                            Dodaj recenzję spektaklu {this.props.title}
                        </h1>
                        <form className='form-horizontal'>
                            <div className='form-group'>
                                <div className='col-md-3' />
                                <label htmlFor='typeName' className='control-label col-md-2'>
                                    Ocena spektaklu
                                </label>
                                <div className='col-md-3'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='typeName'
                                        onChange={this.onRatingChange.bind(this)} />
                                </div>
                                <div className='col-md-3' />
                            </div>
                            <div className='form-group'>
                                <div className='col-md-3' />
                                <label htmlFor='priceAmount' className='control-label col-md-2'>
                                    Treść recenzji
                                </label>
                                <div className='col-md-3'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='priceAmount'
                                        onChange={this.onContentChange.bind(this)} />
                                </div>
                                <div className='col-md-3' />
                            </div>
                            <div className='row'>
                                <div className='col-md-5' />
                                <div className='col-md-3'>
                                    {!!this.state.ratingError && <div>Podaj ocenę spektaklu</div>}
                                    {!!this.state.contentError && <div>Podaj treść recenzji</div>}
                                    <button
                                        type='button'
                                        className='btn btn-default'
                                        onClick={this.addReview.bind(this)}>
                                        Dodaj recenzję</button>
                                    <div>
                                        <Link to={`/plays/${this.props.title}`}>
                                            Wróc do strony spektaklu
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-md-4' />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}



interface AddReviewProps {
    title: string,
    user: string
}

interface AddReviewState {
    rating: string,
    content: string,
    ratingError: boolean,
    contentError: boolean,
    reviewSubmitted: boolean
}

const mapDispatchToProps = () => ({})

export default connect((state: State) => ({
    user: state.session.email
}), mapDispatchToProps)(AddReviewForm);