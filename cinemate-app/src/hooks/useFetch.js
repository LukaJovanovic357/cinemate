import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;

export const useFetch = (apiPath, searchTerm = '') => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3${apiPath}?api_key=${API_KEY}&query=${searchTerm}`
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
