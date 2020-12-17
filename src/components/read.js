import React from 'react';
import {Movies} from './movies';
import axios from 'axios';

export class Read extends React.Component {

    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        movies: []
    };

    ReloadData(){
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                this.setState({ movies: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    // Displays and populates the movies[] from the website
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
        .then(
            (response)=>{
                this.setState({movies: response.data})
                }
            )
        .catch(
            (error)=>{console.log(error)}
        );
    }

    render() {
        return (
            <div>
                {/* Imports the movie Title, Year and Image from the movies component*/}
                <Movies movies={this.state.movies} ReloadData={this.ReloadData}></Movies>
            </div>
        );
    }
}
