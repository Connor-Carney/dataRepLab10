import React from 'react';
import {Movies} from './movies';
import axios from 'axios';

export class Read extends React.Component {

    state = {
        movies: []
    };
    // Displays and populates the movies[] from the website
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
        .then(
            (response)=>{
                this.setState({movies: response.data.Search})
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
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}
