import './App.css';
import Cocktail from '../Cocktail/Cocktail';
import Quiz from '../Quiz/Quiz';
import { Route, NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
