import './App.css';
import Cocktail from '../Cocktail/Cocktail';
import Quiz from '../Quiz/Quiz';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
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
