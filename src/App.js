import { useState } from 'react';
import './App.css';


const MovieForm = () => {
	return (
		<div>
			<h1>Movie Form</h1>
			<label>Title: </label>
			<input type="text"/>
		</div>
	)
}

const App = () => {

	const [title, setTitle] = useState("")

	return (
		<div className="App App-header">
			<MovieForm />
		</div>
	);
}

export default App;
