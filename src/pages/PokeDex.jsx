import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoCaretBackOutline } from "react-icons/io5";

export const PokeDex = () => {
    const { id } = useParams();
    const [pokemonData, setPokemonData] = useState(null);
    const [pokemonDescription, setPokemonDescription] = useState('');
    const [pokemonTypes, setPokemonTypes] = useState([]);

    const validId = id > 0 && id <= 151 ? id : 1;

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${validId}`)
            .then(response => response.json())
            .then(data => {
                setPokemonData(data);
                return fetch(data.species.url);
            })
            .then(response => response.json())
            .then(data => {

                const descriptionEntry = data.flavor_text_entries.find(entry => entry.language.name === 'en');
                if (descriptionEntry) {
                    setPokemonDescription(descriptionEntry.flavor_text);
                } else {
                    setPokemonDescription('Descripción no disponible');
                }
            })
            .catch(error => console.error('Error fetching data:', error));

        setPokemonTypes([]);
    }, []);

    useEffect(() => {
        if (pokemonData) {
            setPokemonTypes(pokemonData.types.map(type => type.type.name));
        }
    }, [pokemonData]);

    return (
        <div className='flex justify-center items-center h-screen bg-red-400 flex-col lg:flex-row'>

            <div>
                <Link to={"/pokegrid"}>
                    <IoCaretBackOutline className="hover:text-gray-500" size={100} />
                </Link>
            </div>

            {pokemonData && (
                <div className='bg-gray-300 rounded-lg shadow-lg shadow-gray-500/40'>
                    <div className="p-10">
                        <div className="bg-black flex items-center justify-center">
                            <img className="w-60 h-auto" src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                        </div>
                        <div className="flex justify-between text-slate-600 text-2xl">
                            <h2 className="text-gray-900"># {pokemonData.id}</h2>
                            <h2 className="text-2xl">{pokemonTypes.join(' ')}</h2>
                            <h2 className="text-2xl font-semibold text-slate-600 lg:text-4xl"> {pokemonData.name}</h2>
                        </div>

                        <div className="flex flex-col gap-4 text-md font-semibold">
                            <div className="mt-4">
                                <p>HT {pokemonData.height}</p>
                                <p>WT {pokemonData.weight}</p>
                            </div>

                            <div className="text-gray-600 ">
                                <h2>{pokemonDescription}</h2>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};
