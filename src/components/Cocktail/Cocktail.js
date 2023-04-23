import './Cocktail.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react';
import getCocktails from '../../api-calls';
import listIngredients from '../../helper-functions';
import cocktailImg from '../../images/cocktail.png'

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
        <header>
            <NavLink className='no-style' to="/">
                <div className='logo'>
                    <h1>Booze</h1> <img className="logo-img" src={cocktailImg} /> <h1>Buddy</h1>
                </div>
            </NavLink>
            <button onClick={getRandomCocktail}>Spin Again!</button>
        </header>
        <div className='cocktail-view'>
            <div className='split-container'>
                <h2>{cocktail.strDrink}</h2>
                <img className="drink-img" src={cocktail.strDrinkThumb} />
            </div>
            <div className='split-container list-container'>
                <h3>Directions:</h3>
                <p>{cocktail.strInstructions}</p>
                <h3>Ingredients:</h3>
                <ul>
                    {listIngredients(cocktail)}
                </ul>
                <h3>Glassware:</h3>
                <p>{cocktail.strGlass}</p>
            </div>
        </div>
    </>
  );
}

export default Cocktail;