import { useEffect, useState } from 'react';
import "./Home.scss";
import axios from "axios";
import {BiPlay} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'

const apiKey = "57c54de683f0a6a6dc6bb3bcbd28d819"
const url = "https://api.themoviedb.org/3"
const imgUrl = "https://image.tmdb.org/t/p/w500"

const Card = ({ img }) => (
  <img className='card' src={img} alt="cover" />
);

const Row = ({ title, arr=[] }) => (
  
  <div className='row'>
    <h2>{title}</h2>
    <div>
          {
            arr.map((item, i)=>(
              <Card key={i} img={`${imgUrl}/${item.poster_path}`}/>
            ))
          }
    </div>
  </div>
);

const Home = () => {

      const [upcomingMovies, setUpcomingMovies] = useState([])
      const [nowPlayingMovies, setNowPlayingMovies] = useState([])
      const [popularMovies, setPopularMovies] = useState([])
      const [topRatedMovies, setTopRatedMovies] = useState([])

      useEffect(()=>{

        const fetchUpcoming = async()=>{
              const {data:{results}} = await axios.get(`${url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=2020-07-01&release_date.lte=2023-07-01&api_key=${apiKey}`)
              setUpcomingMovies(results)
        };

        const fetchNowPlaying = async()=>{
              const {data:{results}} = await axios.get(`${url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=2020-07-01&release_date.lte=2023-07-01&api_key=${apiKey}`)
              setNowPlayingMovies(results)
        };

        const fetchPopular = async()=>{
              const {data:{results}} = await axios.get(`${url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`)
              setPopularMovies(results)
        };

        const fetchTopRated = async()=>{
              const {data:{results}} = await axios.get(`${url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&&api_key=${apiKey}`)
              setTopRatedMovies(results)
        };

        fetchUpcoming()
        fetchNowPlaying()
        fetchPopular()
        fetchTopRated()

      }, [])

      return (
  <section className='home'>
    <div className='banner' style={{
      backgroundImage: popularMovies[0]?`url(${`${imgUrl}/${popularMovies[0].poster_path}`})`:"none"
    }}>

      {
        popularMovies[0] &&
        (
          <h1>{popularMovies[0].original_title}</h1>
        )
      }

      {popularMovies[0]&&
      (
        <p>{popularMovies[0].overview}</p>
      )}


        <div>
        <button> <BiPlay/>Play</button>
      <button>My List <AiOutlinePlus/></button>
        </div>

      

    </div>
    <Row title={"Upcoming"} arr={upcomingMovies}/>
    <Row title={"Now Playing"} arr={nowPlayingMovies}/>
    <Row title={"Popular"} arr={popularMovies}/>
    <Row title={"Top Rated"} arr={topRatedMovies}/>

  </section>
)};

export default Home;
