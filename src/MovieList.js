import React, {useState} from 'react';
import Movie from './Movie';

const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$20',
            id: 23125
        },
        {
            name: 'Inception',
            price: '$30',
            id: 23126
        },
    ]);

    return (
        <div>
            {movies.map(movie => (
                <li>
                    <Movie key={movie.id} name={movie.name} price={movie.price} />
                </li>
            ))}
        </div>
    );
}

export default MovieList;
