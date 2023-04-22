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
				<section className='home'>
					<div className='logo'>
						<h1>Booze</h1> <img className="logo-img" src={martiniImg} /> <h1>Buddy</h1>
					</div>
					<NavLink to="/cocktail">
						<button>Surprise Me</button>
					</NavLink>
					<NavLink to="/quiz">
						<button>Guide Me</button>
					</NavLink>
				</section>
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
