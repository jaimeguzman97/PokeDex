import { Filters } from './Filters'
import { Link } from 'react-router-dom'

export const Header = () => {


    return (
        <header className='flex h-40 justify-center items-center bg-red-600 flex-col gap-4 lg:flex-row lg:justify-between '>

            <div className='flex justify-between items-center gap-2 ml-5 md:flex'>
                <Link to="/pokegrid">
                    <div className='w-20 h-20 bg-blue-500 border-4 rounded-full flex items-center justify-center mr-8 hover:bg-blue-700'>
                        <div>

                        </div>
                    </div>
                </Link>
                <div>

                </div>
                <div className='w-6 h-6 bg-red-700 border border-black rounded-full flex items-center justify-center'>
                    <div>

                    </div>
                </div>
                <div className='w-6 h-6 bg-yellow-500 border border-black rounded-full flex items-center justify-center'>
                    <div>

                    </div>
                </div>
                <div className='w-6 h-6 bg-green-500 border border-black rounded-full flex items-center justify-center'>
                    <div>

                    </div>
                </div>
            </div>
            <div>
                <Filters />
            </div>
        </header>
    )
}
