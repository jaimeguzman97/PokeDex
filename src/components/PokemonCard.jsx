import { Link } from "react-router-dom"

export const PokemonCard = ({ id, name, img }) => {

  const pokeId = parseInt(id);

  const handleFavoriteClick = () => {
    
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.includes(pokeId);

    
    if (isFavorite) {
      const updatedFavorites = favorites.filter((favorite) => favorite !== pokeId);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      
      const updatedFavorites = [...favorites, pokeId];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };


  return (
    <div className="flex flex-col items-center justify-center my-3">

      <Link to={`/PokeDex/${pokeId}`} className="bg-white">
        <div className="border-8 border-gray-300 bg-black rounded-lg drop-shadow-xl">
          <div className="p-8">
            <label className="text-gray-400"># {id}</label>

            <div className="text-slate-100 font-semibold text-lg text-center p-5">
              <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
            </div>

            <div className="w-40 h-40 flex justify-center items-center overflow-hidden">
              <img className="object-cover" src={img} alt={name} />
            </div>
          </div>
        </div>
      </Link>
      <div className="w-60">
        <button className="bg-white w-full" onClick={handleFavoriteClick}>Favorite</button>
      </div>
    </div>
  )
}
