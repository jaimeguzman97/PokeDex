import { Link } from "react-router-dom"


export const HomePage = () => {
    return (

        <section>
            <div className="flex items-center justify-center bg-black">
                <h2 className="font-extrabold text-6xl md:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-300 pb-3">
                    Pokedex
                </h2>
            </div>
            <div className="flex flex-col justify-center items-center h-screen bg-red-400">

                <div className='w-[20rem] h-auto animate-bounce animate-infinite'>
                    <img src="./src/img/pokebola.png" />
                </div>

                <div>
                    <Link to={"/pokegrid"}>
                        <button className="w-52 bg-gray-700 hover:bg-gray-500 text-white font-bold p-7 rounded-lg">START</button>
                    </Link>

                </div>
            </div>
        </section>


    )
}
