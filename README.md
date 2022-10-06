ReactIntroForm:
1) Project Setup:
- Create a new github repo called react-intro-form with the following options:
	- Clone the repo to your computer and add the link to populi
- cd into the react-intro-form directory
- Run 'npx create-react-app .' to initialize react in the repository
- Run 'npm start' after react has finished installing
- If the above worked properly, you should see the react start page on localhost:3000
- Open App.js and replace the App functional component with this code:
	- function App() {
			return (
				<div className="App App-header">
					
				</div>
			);
		}

2) Creating the <MovieForm/> Component:
- Create a new functional component called MovieForm
	- Be sure to include props as the first function parameter and be sure to have a single enclosing <div> tag in the JSX of the return statement
- Add a title to the JSX of the MovieForm component inside the <div></div> tags
	- <h1>Movie Form</h1>
- Add <MovieForm/> as a new component inside of the JSX of the <App /> component between the two <div> tags
	- <div className="App App-header">
      <MovieForm />
    </div>
- If you did this right, then on localhost:3000, you should see the heading "Movie Form" on the page

3) Building out <MovieForm/>:
- At the top of the App.js file, import useState from react
	- import { useState } from "react";
- Add a new state variable to <MovieForm/> called "title" along with its setter function "setTitle" initalized to an empty string:
	- const [title, setTitle] = useState("")
- In the JSX of <MovieForm/> (inside the enclosing divs), add a new text input field and a label that says "Title:"
	- return (
			<div>
				<label>Title:</label>
				<input type="text" />
			</div>
		)
- In the input field you just created, add an onChange handler that will call setTitle with the value from the onChange event
	- <input type="text" onChange={(event)=>{
			setTitle(event.target.value)
		}}/>
	- If this event handler works, it should update the title state variable with the new value entered into the text field. 
	- [Optional]: The easiest way to check that it is working is to add a console.log of title between the title state variable definition and the JSX return statement of <MovieForm/>
		- const [title, setTitle] = useState("")
			console.log(title)
			return (
				/* ...JSX of MovieForm */
			)
- Display the current value of title in the JSX of <MovieForm/> in <p> tags so that you/the user can see the value of title update in real time
	- return (
			<div>
				<label>Title:</label>
				<input type="text" onChange={(e)=>{
					setTitle(e.target.value)
				}}/>
				<p>Current Title: {title}</p>
			</div>
		)
- If you did the above correctly, you should be able to type into the title text input field and see the current title update as you type

4) Implement Additional <MovieForm/> fields:
- In <MovieForm/> repeat the process in step 3 to add the following type="text" input fields to the form:
	- director, actors, plot 
	- _Note_: Since these are type="text" input fields, the state variables for director, actors, plot should be initalized to an empty string: ""
- In <MovieForm/> repeat the process in step 3 to add the following type="number" input fields to the form:
	- year, imdbRating
	- _Note_: 
		- For these two input fields, the state variables should be initialized to 0. 
		- For the imdbRating input field, add the attribute step="0.1" to it so that you can increment the value by a tenth at a time.
			- <input type="number" step="0.1" />




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
