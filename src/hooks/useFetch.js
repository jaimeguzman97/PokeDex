import React, { useEffect, useState } from 'react'

export const useFetch = () => {
 
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
      
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            .then((response) => response.json())
            .then((data) => {

                return Promise.all(data.results.map(pokemon => {
                    return fetch(pokemon.url)
                        .then(response => response.json())
                        .then(poke => {
                            return {
                                id: poke.id,
                                name: poke.name,
                                img: poke.sprites.other.dream_world.front_default
                            };
                        });
                }));

            })
            .then((pokemon) => setData(pokemon))
            .finally(() => setLoading(false))
    }, []);
    
    return{data, loading, error};

}
