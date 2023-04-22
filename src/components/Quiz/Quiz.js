import './Quiz.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import getCocktails from '../../api-calls';
import { useState } from 'react';
import listIngredients from '../../helper-functions';

function Quiz() {

    const [cocktailResults, setCocktailResults] = useState([]);
    const [questionNum, setQuestionNum] = useState(0);
    const [quizError, setQuizError] = useState('');
    const [cocktail, setCocktail] = useState({});

    const spirits = ['Vodka', 'Gin', 'Rum', 'Bourbon', 'Tequila', 'Scotch'];
    const ingredients = ['Lime', 'Lemon', 'Coffee', 'Cranberry_juice', 'Orange_juice', 'Grapefruit_juice', 'Bitters', 'Ginger'];
    const glassware = ['Cocktail_glass', 'Champagne_flute', 'Hurricane_glass', 'Whiskey_sour_glass', 'Highball_glass', 'Shot_glass', 'Collins_glass', 'Martini_glass'];

    const makeButtons = (category) => {
        return category.map((item, index) => <button name={item} onClick={(event) => fetchSelection(event.target.name)} key={index}>{item}</button>);
    }

    const fetchSelection = (selection) => {
        let path;
        if(questionNum < 2) {
            path = 'filter.php?i=' + selection
        } else {
            path = 'filter.php?g=' + selection
        }
        const promise = getCocktails(path);
        promise.then(data => {
            if (typeof data === 'string' || data instanceof String) {
                setQuizError(data);
            } else {
                console.log(data.drinks)
                filterCocktails(data.drinks);
            }
        });
    }

    const filterCocktails = (cocktails) => {
        if(questionNum === 0) {
            setCocktailResults(cocktails);
        } else {
            const filtered = cocktailResults.reduce((array, cV) => {
                cocktails.forEach(cocktail => {
                    if(cocktail.idDrink === cV.idDrink) {
                        array.push(cocktail);
                    }
                });
                return array;
            }, []);
            console.log(filtered)
            setCocktailResults(filtered);
        }
        setQuestionNum(questionNum + 1);
    }

    const pickRandom = () => {
        const index = Math.floor(Math.random() * cocktailResults.length);
        console.log(cocktailResults[index])
        const promise = getCocktails('lookup.php?i=' + cocktailResults[index].idDrink);
        promise.then(data => {
            if (typeof data === 'string' || data instanceof String) {
                setQuizError(data);
            } else {
                console.log(data.drinks[0])
                setCocktail(data.drinks[0]);
            }
        });
        setQuestionNum(questionNum + 1);
    }

    return (
        <div>
            <NavLink to="/">
                <p>LOGO - HOME</p>
            </NavLink>
            {questionNum === 0 && 
            <>
                <h2>Pick A Spirit</h2>
                {makeButtons(spirits)}
            </>
            }
            {questionNum === 1 && 
            <>
                <h2>Pick An Ingredient</h2>
                {makeButtons(ingredients)}
            </>
            }
            {questionNum === 2 && 
            <>
                <h2>Pick A Glass</h2>
                {makeButtons(glassware)}
            </>
            }

            {questionNum === 3 && 
            <>
                <button onClick={() => pickRandom()}>See Results</button>
            </>
            }

            {questionNum === 4 && 
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
                <button onClick={() => setQuestionNum(0)}>Restart Quiz</button>
            </div>
            }      
        </div>
    );
}

export default Quiz;