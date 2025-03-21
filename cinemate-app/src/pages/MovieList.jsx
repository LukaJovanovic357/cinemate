import Card from '../components/Card';
import { useFetch } from '../hooks/useFetch.js';

export const MovieList = ({ apiPath }) => {
    const { data: movies } = useFetch(apiPath);

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
