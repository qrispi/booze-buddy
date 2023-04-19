import './Cocktail.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Cocktail({cocktail}) {

    const formatIngredients = () => {
        const allKeys = Object.keys(cocktail);
        const keys = allKeys.filter(key => key.includes('Ingredient'))
        return keys.reduce((acc, key, index) => {
            if(cocktail[key]) {
                acc.push(cocktail['strMeasure' + (index + 1)] + cocktail[key])
            }
            return acc
        }, [])
    }

    

  return (
    <div>
        <NavLink to="/">
            <p>LOGO - HOME</p>
        </NavLink>
        <h2>{cocktail.strDrink}</h2>
        <img className="drink-img" src={cocktail.strDrinkThumb}/>
        <p>{cocktail.strInstructions}</p>
        <button>Spin Again</button>
    </div>
  );
}

export default Cocktail;