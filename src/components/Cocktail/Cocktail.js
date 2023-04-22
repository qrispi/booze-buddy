import './Cocktail.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react';
import getCocktails from '../../api-calls';
import listIngredients from '../../helper-functions';
import martiniImg from '../../images/martini.png'

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
        <NavLink className='heading' to="/">
            <div className='logo'>
                <h1>Booze</h1> <img className="logo-img" src={martiniImg} /> <h1>Buddy</h1>
            </div>
        </NavLink>
        <div className='cocktail-view'>
            <div className='split-container'>
                <h2 className='heading'>{cocktail.strDrink}</h2>
                <img className="drink-img" src={cocktail.strDrinkThumb} />
            </div>
            <div className='split-container list-container'>
                <h3 className='heading'>Directions:</h3>
                <p className='text-body'>{cocktail.strInstructions}</p>
                <h3 className='heading'>Ingredients:</h3>
                <ul className='text-body'>
                    {listIngredients(cocktail)}
                </ul>
                <h3 className='heading'>Glassware:</h3>
                <p className='text-body'>{cocktail.strGlass}</p>
            </div>
        </div>
        <button onClick={getRandomCocktail}>Spin Again</button>
    </>
  );
}

export default Cocktail;