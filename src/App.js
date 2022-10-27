import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Carousel from './components/Carousel';

function App() {

  const [movies, setMovies] = useState([])
  const [discover, setDiscover] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      let response = []
      search === '' ? response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=b4ac0657bf5fbcdfbf343742414a3dfa&page=${page}`) : response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b4ac0657bf5fbcdfbf343742414a3dfa&query=${search}&page=${page}`)
      movies.length === 0 ? setMovies(response.data.results) : setMovies([...movies, ...response.data.results])
      setTotalPages(response.data.total_pages)
      setLoading(true)
    }
    fetchMovies()
    setLoading(false)
  }, [search, page]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=b4ac0657bf5fbcdfbf343742414a3dfa&language=en-US&region=ID&sort_by=popularity.desc&page=1`)
      setDiscover(response.data.results)
    }
    fetchMovies()
  }, []);

  return (
    <>
      <Header title='FinProH8'/>
      <div className='flex flex-col text-white items-center mb-10'>
        {search === '' && <Carousel discover={discover} title={'Popular in Indonesia'}/>}
        <Search 
          title={search === '' ? 'Trending this week' : `Search: ${search}`} 
          search={search} 
          setSearch={setSearch} 
          setMovies={setMovies} 
          setPage={setPage} 
        />
        <Movie 
          movies={movies} 
          totalPages={totalPages} 
          setPage={setPage} 
          page={page}
          loading={loading} 
        />
      </div>
    </>
    
  );
}

export default App;
