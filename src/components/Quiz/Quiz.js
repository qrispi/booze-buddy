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
            setQuestionNum(questionNum + 1);
            console.log(questionNum)
        } else {
            path = 'filter.php?g=' + selection
            setQuestionNum(0);
        }
        const promise = getCocktails(path);
        promise.then(data => {
            if (typeof data === 'string' || data instanceof String) {
                console.log(data)
                setQuizError(data);
            } else {
                console.log(data.drinks)
                // setCocktail(data.drinks);
            }
        });
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