import  {AiFillStar} from 'react-icons/ai'
const Movie = ({movies, totalPages, setPage, page, loading}) => {
    return(
        <div className="flex w-11/12 mt-4 justify-center">
            {totalPages === 0 ? (
                <div className='text-2xl mt-7 p-3 bg-rose-600/80 rounded-lg'>
                    Movie's not found!
                </div>
            ) : (
                <div className='flex flex-col items-center'>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {/* Movie's Card */}
                        {movies?.map((movie) => (
                            <div key={movie.id} className="relative rounded-lg">
                                <img className="rounded-lg h-full" src={movie?.poster_path ? `https://image.tmdb.org/t/p/w342${movie?.poster_path}` : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} alt="Movie's Poster" />
                                <div className="absolute backdrop-blur-sm bg-blue-800 bg-opacity-50 p-2 opacity-0 hover:opacity-100 transition ease-in-out duration-150 h-full w-full bottom-0 rounded-lg">
                                    <div className="text-sm md:text-base font-bold line-clamp-2 pb-2">{movie?.title}</div>
                                    <div className='flex items-center text-xs md:text-sm pb-2 mb-2 border-b'><AiFillStar/>   {movie.vote_average}</div>
                                    <div className="text-xs md:text-sm mb-2">{movie.release_date}</div>
                                    <p className="text-xs md:text-sm line-clamp-2 sm:line-clamp-3 md:line-clamp-4">{movie?.overview}</p>
                                </div>
                                <div className='w-full md:block absolute top-0 p-2 rounded-b-lg'>
                                    <div className="text-sm md:text-base font-bold line-clamp-2 pb-2">{movie?.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button disabled={!loading} className={`w-52 mt-7 bg-blue-500 border border-blue-800 disabled:bg-blue-300 rounded-lg p-2 ${page === totalPages? 'hidden' : ''}`} onClick={() => {
                        setPage(page+1)
                    }}>{!loading ? 'Loading...' : 'Load More'}</button>
                </div>
            )}
        </div>
    )
}
export default Movie