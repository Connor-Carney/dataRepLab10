import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

export class MovieItem extends React.Component {
    render() {
        return (
            <div>
                {/* Unorganised view of the Movie's Title, Image and Year}
                { <h4>{this.props.movie.Title}</h4>
                <p>{this.props.movie.Year}</p>
                <img src={this.props.movie.Poster} width="200" height="200"></img> }

                {Organised view of the Movie's Title, Image and Year*/}
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                            {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/"+this.props.movie._id} className="btn btn-danger">Edit</Link>
                </Card>

            </div>
        );
    }
}
