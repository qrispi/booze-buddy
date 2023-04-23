import './App.css';
import Cocktail from '../Cocktail/Cocktail';
import Quiz from '../Quiz/Quiz';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import cocktailImg from '../../images/cocktail.png'

function App() {

  return (
	<main>
		<Switch>
			<Route exact path="/">
				<section className='home'>
					<div className='logo big-logo'>
						<h1>Booze</h1><img className="logo-img big-logo-img" src={cocktailImg} /><h1>Buddy</h1>
					</div>
					<NavLink to="/cocktail">
						<button className='big-button'>Surprise Me!</button>
					</NavLink>
					<NavLink to="/quiz">
						<button className='big-button'>Guide Me!</button>
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
		<p className='tagline'>Y o u r C o c k t a i l C o m p a n i o n</p>
	</main>
  );
}

export default App;
