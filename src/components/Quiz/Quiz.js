import './Quiz.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Quiz() {
    const spirits = ['vodka', 'gin', 'rum', 'whiskey', 'tequila', 'scotch', 'cordial', 'sparkling', 'non-alcoholic']
    const ingredients = ['lime', 'lemon', 'coffee', 'soda', 'cranberry', 'orange', 'grapefruit', 'bitters', 'ginger']
    const glassware = ['rocks', 'flute', 'hurricane', 'coupe', 'highball', 'shot', 'wine', 'martini']

    const makeButtons = (category) => {
        return category.map(item => <button>{item}</button>)
    }

  return (
    <div>
        <NavLink to="/">
            <p>LOGO - HOME</p>
        </NavLink>
        <h2>Pick A Spirit</h2>
        {makeButtons(spirits)}
        <h2>Pick An Ingredient</h2>
        {makeButtons(ingredients)}
        <h2>Pick A Glass</h2>
        {makeButtons(glassware)}
    </div>
  );
}

export default Quiz;