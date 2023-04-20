import './Cocktail.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react';

function Cocktail() {

    const [cocktail, setCocktail] = useState({});
	const [randomError, setError] = useState('');

	const getRandomCocktail = async () => {
		try {
			const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
			const data = await response.json();
			setCocktail(data.drinks[0]);
		} catch (error) {
			setError(error.message);
		}
	}

	useEffect(() => {
		getRandomCocktail();
	}, [])

    const formatIngredients = () => {
        const allKeys = Object.keys(cocktail);
        const keys = allKeys.filter(key => key.includes('Ingredient'));
        return keys.reduce((acc, key, index) => {
            if(cocktail[key]) {
                acc.push(cocktail['strMeasure' + (index + 1)] + cocktail[key]);
            }
            return acc;
        }, []);
    }

    const listIngredients = () => {
        const ingredients = formatIngredients();
        return ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>);
    }

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
                {listIngredients()}
            </ul>
            <h3>Glassware:</h3>
            <p>{cocktail.strGlass}</p>
            <button onClick={getRandomCocktail}>Spin Again</button>
        </div>
    </>
  );
}

export default Cocktail;