import React, { useState } from 'react';
import { useFilters } from '../hooks/useFilters';
import { TiStarFullOutline } from "react-icons/ti";

export const Filters = () => {
    const [search, setSearch] = useState('');
    const { filters, setFilters } = useFilters();

    const onSearchChange = (event) => {
        setSearch(event.target.value);
        setFilters(prevState => ({
            ...prevState,
            name: event.target.value
        }));
    };

    const handleShowFavoritesClick = () => {
        setFilters(prevFilters => ({
            ...prevFilters,
            favorite: !prevFilters.favorite,
        }));
    };

    return (
        <div className="flex justify-center items-center lg:gap-7 lg:mr-10">
            <div>
                <button className="bg-slate-400" onClick={handleShowFavoritesClick}>
                    {filters.favorite ? <TiStarFullOutline className="bg-red-600 text-black" size={30} /> : <TiStarFullOutline className="bg-red-600 text-yellow-300" size={30} />}
                </button>
            </div>
            <div>
                <input className="rounded-lg w-80 p-2" onChange={onSearchChange} type="text" placeholder="Search pokemon..." />
            </div>
        </div>
    );
};

