import './App.css';
import Cocktail from '../Cocktail/Cocktail';
import Quiz from '../Quiz/Quiz';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react';

function App() {
	const [randomCocktail, setRandomCocktail] = useState({});
	const [randomError, setRandomError] = useState('');

	const getRandomCocktail = async () => {
		try {
			const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
			const data = await response.json();
			setRandomCocktail(data.drinks[0]);
		} catch (error) {
			setRandomError(error.message);
		}
	}

	useEffect(() => {
		getRandomCocktail()
	}, [])

  return (
	<div>
		<Switch>
			<Route exact path="/">
				<h1>Booze Buddy</h1>
				<NavLink to="/cocktail">
					<button>Surprise Me</button>
				</NavLink>
				<NavLink to="/quiz">
					<button>Guide Me</button>
				</NavLink>
			</Route>

			<Route exact path="/cocktail">
				<Cocktail />
			</Route>

			<Route exact path="/quiz">
				<Quiz />
			</Route>

			<Route path="*">
				<h2>ANY PATH</h2>
				<Redirect from="*" to="/" />
			</Route>
		</Switch>
	</div>
  );
}

export default App;
