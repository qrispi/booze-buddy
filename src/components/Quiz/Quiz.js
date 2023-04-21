import './Quiz.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import getCocktails from '../../api-calls';
import { useState } from 'react';

function Quiz() {

    const [cocktailResults, setCocktailResults] = useState([]);
    const [questionNum, setQuestionNum] = useState(0);
    const [quizError, setQuizError] = useState('');

    const spirits = ['Vodka', 'Gin', 'Rum', 'Bourbon', 'Tequila', 'Scotch']
    const ingredients = ['Lime', 'Lemon', 'Coffee', 'Cranberry_juice', 'Orange_juice', 'Grapefruit_juice', 'Bitters', 'Ginger']
    const glassware = ['Cocktail_glass', 'Champagne_flute', 'Hurricane_glass', 'Whiskey_sour_glass', 'Highball_glass', 'Shot_glass', 'Collins_glass', 'Martini_glass']

    const makeButtons = (category) => {
        return category.map((item, index) => <button name={item} onClick={(event) => fetchSelection(event.target.name)} key={index}>{item}</button>)
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
        if(questionNum < 2) {
            setQuestionNum(questionNum + 1);
        } else {
            setQuestionNum(0);
        }
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
    </div>
    );
}

export default Quiz;