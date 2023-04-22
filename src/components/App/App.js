import './App.css';
import Cocktail from '../Cocktail/Cocktail';
import Quiz from '../Quiz/Quiz';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import martiniImg from '../../images/martini.png'

function App() {

  return (
	<main>
		<Switch>
			<Route exact path="/">
				<h1 className='heading'>Booze<img className="logo-img" src={martiniImg} />Buddy</h1>
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
				<Redirect from="*" to="/" />
			</Route>
		</Switch>
	</main>
  );
}

export default App;
