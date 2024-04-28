import { createContext, useEffect, useState } from "react";

export const FiltersContext = createContext()


export function FiltersProvider({ children }) {

    const [filters, setFilters] = useState({
        name: '',
        favorite: JSON.parse(localStorage.getItem('favorites')) || []
    });

    const updateFavoriteIds = (favoriteIds) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            favorite: favoriteIds
        }));
        localStorage.setItem('favorites', JSON.stringify(favoriteIds));
    };

    useEffect(() => {
        const storedFavoriteIds = JSON.parse(localStorage.getItem('favorites'));
        if (storedFavoriteIds !== null) {
            setFilters(prevFilters => ({
                ...prevFilters,
                favorite: storedFavoriteIds
            }));
        }
    }, []);

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters,
            updateFavoriteIds
        }}>
            {children}
        </FiltersContext.Provider>
    );
}