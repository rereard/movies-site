import { useState } from "react"
import { AiFillHome } from 'react-icons/ai'

const Search = ({title, search, setSearch, setMovies, setPage}) => {

    const [searchValue, setSearchValue] = useState('')

    return (
        <div className='flex flex-col md:flex-row mt-20 w-11/12 justify-center md:justify-between'>
            <div className="flex text-2xl md:text-3xl font-bold mb-2 items-center">
                {search !== '' && (<button className="text-xl mr-2 bg-blue-500 border border-blue-800 rounded-lg p-2" onClick={() => {setSearch(''); setSearchValue(''); setMovies([]); setPage(1)}}><AiFillHome/></button>)}
                <h1>{title}</h1>
            </div>
            <form className='flex w-full md:items-center md:w-96 rounded-lg flex-col md:flex-row' onSubmit={(event) => {
                setMovies([])
                setPage(1)
                setSearch(searchValue)
                event.preventDefault()
            }}>
                <input type='text' className='flex-1 rounded-lg md:rounded-none md:rounded-l-lg text-black p-2 border border-blue-800' placeholder='search movies...' value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
                <input type="submit" value='Search' className='mt-2 md:mt-0 text-md p-2 cursor-pointer bg-blue-500 rounded-lg sm:rounded-none sm:rounded-r-lg border border-blue-800' />
            </form>
        </div>
    )
}
export default Search