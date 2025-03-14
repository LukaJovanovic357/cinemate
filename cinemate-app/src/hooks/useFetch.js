import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;

export const useFetch = apiPath => {
    const [data, setData] = useState([]);

    // https://api.themoviedb.org/3/movie/upcoming?api_key=f2c3eb3d87114d96edcbb244265d8b9b correct path

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3${apiPath}?api_key=${API_KEY}`
                );
                const json = await response.json();

                setData(json.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMovies();
    }, [data]);

    return {
        data
    };
};
