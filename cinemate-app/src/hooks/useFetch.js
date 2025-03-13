import { useState, useEffect } from 'react';

export const useFetch = url => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMovies();
    }, []);

    return {
        data
    };
};
