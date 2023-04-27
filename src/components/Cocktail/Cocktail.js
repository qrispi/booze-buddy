import './Cocktail.css';
import { NavLink, Route } from 'react-router-dom/cjs/react-router-dom.min';
import listIngredients from '../../utilities';
import cocktailImg from '../../images/cocktail.png';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Cocktail({cocktail, getRandomCocktail, error, clearError}) {
   
    const [loaded, setLoaded] = useState(false);

  return (
    <>
        <Route exact path="/cocktail">
            <header>
                <NavLink className='no-style' to="/">
                    <div className='logo'>
                        <h1>Booze</h1><img className="logo-img" src={cocktailImg} alt='Cocktail Logo'/><h1>Buddy</h1>
                    </div>
                </NavLink>
                <button onClick={() => {
                    clearError();
                    getRandomCocktail();
                }}>Spin Again!</button>
            </header>
        </Route>
        {error && 
        <div className='error-container'>
            <p>Bummer... We are experiencing server issues right now.</p>
            <p>Please try again later!</p>
        </div>
        }
        {!loaded &&
        <h5>IT aint loaded yet</h5>  
        }
        {!error && loaded &&
        <div className='cocktail-view'>
            <div className='split-container'>
                <h2>{cocktail.strDrink}</h2>
                <img className="drink-img" src={cocktail.strDrinkThumb} alt={'Suggested Preparation of' + cocktail.strDrink}/>
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
        }
    </>
  );
}

export default Cocktail;

Cocktail.propTypes = {
    cocktail: PropTypes.shape({
        strDrink: PropTypes.string,
        strDrinkThumb: PropTypes.string,
        strInstructions: PropTypes.string,
        strGlass: PropTypes.string
    }),
    getRandomCocktail: PropTypes.func,
    error: PropTypes.string,
    clearError: PropTypes.func
};