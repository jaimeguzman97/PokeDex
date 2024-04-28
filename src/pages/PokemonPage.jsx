import { useEffect, useState } from 'react';
import { PokemonCard } from '../components/PokemonCard';
import { useFetch } from '../hooks/useFetch';
import { useFilters } from '../hooks/useFilters';
import { Pagination } from '../components/Pagination';
import { Loader } from '../components/Loader';

export const PokemonPage = () => {

  const [pokemonPage, setPokemonPage] = useState(30);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error } = useFetch();
  const { filters, filterPokemon, updateFavoriteIds } = useFilters();

  const lastIndex = currentPage * pokemonPage;
  const firstIndex = lastIndex - pokemonPage;


  const filteredPokemon = filterPokemon(data || []);

  

  const totalPokemon = filteredPokemon.length;


  useEffect(() => {

    setCurrentPage(1);

  }, [totalPokemon]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="bg-red-700 h-screen">
      
      {loading ? (
        <Loader />
      ) : (
        <section className="flex items-center justify-center flex-col">

          <Pagination
            pokemonPage={pokemonPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPokemon={totalPokemon}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 bg-red-500 w-full">
            {
              filteredPokemon.map(poke => (
                <PokemonCard key={poke.id} {...poke} />

              )).slice(firstIndex, lastIndex)
            }
          </div>

          <Pagination
            pokemonPage={pokemonPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPokemon={totalPokemon}
          />
        </section>
      )}



    </main>
  );
}
