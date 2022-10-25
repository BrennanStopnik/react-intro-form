import { useState } from 'react';
import './App.css';


const MovieForm = (props) => {

	const [title, setTitle] = useState("");
	const [director, setDirector] = useState("");
	const [actor, setActor] = useState("");
	const [plot, setPlot] = useState("");
	const [imdb, setImdb] = useState(0);
	const [year, setYear] = useState(0);
  
	return (
	  <div>
		<label>Title: </label>
		<input type="text" onChange={
			(e)=>{setTitle(e.target.value)
		}}/>

		<br/>
		<label>Director: </label>
		<input type="text" onChange={
			(e)=>{setDirector(e.target.value)
		}}/>

		<br/>
		<label>Actors: </label>
		<input type="text" onChange={
			(e)=>{setActor(e.target.value)
		}}/>
		
		<br/>
		<label>Plot: </label>
		<input type="text" onChange={
			(e)=>{setPlot(e.target.value)
		}}/>

		<br/>
		<label>Imdb Rating: </label>
		<input type="number" step="0.1" onChange={
			(e)=>{setImdb(e.target.value)
		}}/>

		<br/>
		<label>Year: </label>
		<input type="number" onChange={
			(e)=>{setYear(e.target.value)
		}}/>

		<br/>
		<button onClick={()=>{
			const newMovie = {
				title: title,
				director: director,
				actor: actor,
				plot: plot,
				imdb: imdb,
				year: year
			}
			props.handleAddMovie(newMovie)
		}}>Add Movie</button>
		<br/>

		{/* <label for="movies">Choose a movie</label>
		<select name="movies" id="cars">
			<option>Movie</option>
			<option>Movie2</option>
		</select> */}
  
  
		<p>Current Title: {title}</p>
		<p>Current Director: {director}</p>
		<p>Current Actors: {actor}</p>
		<p>Current Plot: {plot}</p>
		<p>Current Imbd Rating: {imdb}</p>
		<p>Current Year: {year}</p>
	  </div>
	)
}
  
const MovieDisplay = (props) => {
	return (
		<div>
			{props.movieList.map((movie, index) => {
				return <MovieItem movie={movie} key={index}/>
			})}
		</div>
	)
}

const MovieItem = (props) => {
	return (
		<div>
			<h2>Title: {props.movie.title}</h2>
			<p>Director: {props.movie.director}</p>
			<p>Actors: {props.movie.actor}</p>
			<p>Plot: {props.movie.plot}</p>
			<p>Imdb Rating: {props.movie.imdb}</p>
			<p>Year: {props.movie.year}</p>
		</div>
	)
}
  
const App = () => {

	const [movieList, setMovieList] = useState([])

	const handleAddMovie = (newMovie) => {
		const movieListCopy = [ ...movieList, newMovie ]
		setMovieList(movieListCopy)
	}

	return (
	  <div className="App">
		<h1>Movie Form</h1>
		<header className="App-header">
			<MovieForm handleAddMovie={handleAddMovie} movieList={movieList} />
			<MovieDisplay movieList={movieList}/>
		</header>
	  </div>
	);
}
  
export default App;