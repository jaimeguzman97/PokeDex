
import { PokemonCard } from './components/PokemonCard';
import { useFetch } from './hooks/useFetch';
import { useFilters } from './hooks/useFilters';
import { Header } from './components/Header';

export const PokeApp = () => {


    const { data, loading, error } = useFetch();

    const {filterPokemon} = useFilters(); 

    const filteredPokemon = filterPokemon(data || []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <main className='bg-blue-500'>
            <Header/>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 bg-red-500 mx-auto">
                {
                    filteredPokemon.map(poke => (
                        <PokemonCard key={poke.id} {...poke} />
                    ))
                }
            </div>
        </main>
    );
}
