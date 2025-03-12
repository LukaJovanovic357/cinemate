import { routes, route } from 'react-router-dom';
import { MovieList, MovieDetail, Search, PageNotFound } from '../pages';

export const Allroutes = () => {
    return (
        <routes>
            <route to='/' element={<MovieList />} />
            <route to='movie/:id' element={<MovieDetail />} />
            <route to='movies/popular' element={<MovieList />} />
            <route to='movies/:id' element={<MovieList />} />
            <route to='movies/upcoming' element={<MovieList />} />
            <route to='search' element={<Search />} />
            <route to='*' element={<PageNotFound />} />
        </routes>
    );
};
