import React from 'react';

export class Create extends React.Component {

    constructor() {
        super();
        {/* Bindings between the constuctor and the methods */}
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }
    /* Targets the values entered by the user */
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        });
    }
    /* Brings up an alert displaying the information that was enterd */
    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);
    }

    /* Takes in the information from user about the Title, Year and the Poster */
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    {/* Code to take in the movie title */}
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    {/* Code to take in the movie year */}
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>
                    {/* Code to take in the movie poster description */}
                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        <textarea
                        className='form-control'
                        value={this.state.Poster}
                        onChange={this.onChangePoster}></textarea>
                    </div>
                    {/* Code for the button to submit the information gathered */}
                    <div className='form-group'>
                        <input type='Submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
