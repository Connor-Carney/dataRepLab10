import React from 'react';
import axios from 'axios';

export class Edit extends React.Component {

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

    componentDidMount() {
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/movies/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Year:response.data.year,
                Poster:response.data.poster
            })
        })
        .catch((error) => {
            console.log(error);
        });
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
        alert("Movie: " + this.state.Title + ", Year: " + this.state.Year + ", Poster: " + this.state.Poster);

        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/api/movies/'+this.state._id, newMovie)
        .then(res => {
            console.log(res.data);
        })
        .catch();

        // axios.post('http://localhost:4000/api/movies', newMovie)
        // .then((res) => {
        //     console.log(res);
        // })
        // .catch((err) => {
        //     console.log(err);
        // })
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
                            value='Edit Movie'
                            className='btn btn-danger'></input>
                    </div>
                </form>
            </div>
        );
    }
}
