import Card from '../components/Card';
import { useFetch } from '../hooks/useFetch.js';

const API = import.meta.env.VITE_API_KEY;

export const MovieList = () => {
    const { data: movies } =
        useFetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API}
`);

    return (
        <main>
            <section className='max-w-7xl mx-auto py-7'>
                <div className='flex justify-start flex-wrap gap-3'>
                    {movies.map(movie => (
                        <Card key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </main>
    );
};
