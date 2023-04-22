import './Cocktail.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react';
import getCocktails from '../../api-calls';
import listIngredients from '../../helper-functions';

function Cocktail() {

    const [cocktail, setCocktail] = useState({});
	const [error, setError] = useState('');

	const getRandomCocktail = () => {
		const promise = getCocktails('random.php');
        promise.then(data => {
            if (typeof data === 'string' || data instanceof String) {
                setError(data);
            } else {
                setCocktail(data.drinks[0]);
            }
        });
	}

	useEffect(() => {
		getRandomCocktail();
	}, [])

  return (
    <>
        <NavLink to="/">
            <p>LOGO - HOME</p>
        </NavLink>
        <div className='cocktail-view'>
            <h2>{cocktail.strDrink}</h2>
            <img className="drink-img" src={cocktail.strDrinkThumb} />
            <h3>Directions:</h3>
            <p>{cocktail.strInstructions}</p>
            <h3>Ingredients:</h3>
            <ul>
                {listIngredients(cocktail)}
            </ul>
            <h3>Glassware:</h3>
            <p>{cocktail.strGlass}</p>
            <button onClick={getRandomCocktail}>Spin Again</button>
        </div>
    </>
  );
}

export default Cocktail;