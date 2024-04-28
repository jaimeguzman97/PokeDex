import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext);

    const filterPokemon = (pokemons) => {
        return pokemons.filter(pokemon => {
            return (
                (filters.name === '' || pokemon.name.toLowerCase().includes(filters.name.toLowerCase()))
            );
        });
    };

    const updateFavoriteIds = (favoriteIds) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            favorite: favoriteIds
        }));
        localStorage.setItem('favorites', JSON.stringify(favoriteIds));
    };

    return { filters, filterPokemon, setFilters, updateFavoriteIds };
}