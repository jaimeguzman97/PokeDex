
export const Pagination = ({ pokemonPage, totalPokemon, currentPage, setCurrentPage }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPage); i++) {
        pageNumbers.push(i)
    }


    const onSpecificPage = (n) => {

        setCurrentPage(n);
    }


    return (
        <div className="bg-red-700 p-5 w-full flex items-center justify-center">
            <section>

                <ul className="flex items-center -space-x-px h-8 text-sm">

                    {pageNumbers.map(noPage => (
                        <li key={noPage}>
                            <a
                                onClick={() => onSpecificPage(noPage)}
                                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300
                                    ${currentPage === noPage
                                        ? 'bg-green-600 text-white'
                                        : 'bg-white text-gray-500 hover:bg-yellow-500 hover:text-gray-500'
                                    }`}
                            >
                                {noPage}
                            </a>
                        </li>
                    ))}

                </ul>
            </section>
        </div>
    )
}
