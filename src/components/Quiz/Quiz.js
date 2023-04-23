import './Quiz.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import getCocktails from '../../api-calls';
import { useState } from 'react';
import cocktailImg from '../../images/cocktail.png'
import Cocktail from '../Cocktail/Cocktail';
import dictionary from '../../Reference-Sheet';

function Quiz() {

    const [cocktailResults, setCocktailResults] = useState([]);
    const [questionNum, setQuestionNum] = useState(0);
    const [quizError, setQuizError] = useState('');
    const [cocktail, setCocktail] = useState({});

    const spirits = ['Vodka', 'Gin', 'Rum', 'Whiskey', 'Tequila', 'Scotch'];
    const ingredients = ['Lime', 'Lemon', 'Coffee & Cream', 'Orange', 'Carbonation', 'Bitters'];
    // const glassware = ['Stemmed', 'Stemless'];

    const makeButtons = (category) => {
        return category.map((item, index) => <button className='quiz-button' data-searches={dictionary[item]} onClick={(event) => fetchSelection(event.target.dataset.searches)} key={index}>{item}</button>);
    }

    const fetchSelection = (selection) => {
        console.log(selection)
        // let path;
        // if(questionNum < 2) {
        //     path = 'filter.php?i=' + selection;
        // } else {
        //     path = 'filter.php?g=' + selection;
        // }
        // const promise = getCocktails(path);
        // promise.then(data => {
        //     if (typeof data === 'string' || data instanceof String) {
        //         setQuizError(data);
        //     } else {
        //         setQuizError('');
        //         filterCocktails(data.drinks);
        //     }
        // });
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
            setCocktailResults(filtered);
        }
        setQuestionNum(questionNum + 1);
    }

    const pickRandom = () => {
        if(cocktailResults.length !== 0) {
            const index = Math.floor(Math.random() * cocktailResults.length);
            const promise = getCocktails('lookup.php?i=' + cocktailResults[index].idDrink);
            promise.then(data => {
                if (typeof data === 'string' || data instanceof String) {
                    setQuizError(data);
                } else {
                    setQuizError('');
                    console.log(data.drinks[0]);
                    setCocktail(data.drinks[0]);
                }
            });
        }
        setQuestionNum(questionNum + 1);
    }

    const confirmResult = () => {
        if(cocktailResults.length !== 0 && !quizError) {
            return <Cocktail cocktail={cocktail}/>
        }
        if (cocktailResults.length === 0 && !quizError) {
            return (
                <div className='no-result-container'>
                    <h2>Wow you're picky!</h2>
                    <p className='no-result-message'>We don't have any cocktails that match those selections...</p>
                    <NavLink to="/cocktail">
                        <button>Surprise Me!</button>
                    </NavLink>
                </div>
            )
        }
    }

    return (
        <>
            <header>
                <NavLink className='no-style' to="/">
                    <div className='logo logo-hover'>
                        <h1>Booze</h1> <img className="logo-img" src={cocktailImg} alt='Cocktail Logo'/> <h1>Buddy</h1>
                    </div>
                </NavLink>
                {questionNum === 4 && 
                    <button onClick={() => {
                        setQuestionNum(0);
                        setQuizError('');
                    }
                    }>Restart Quiz!</button>
                }      
            </header>
            {quizError && 
                <>
                    <p>Bummer... We are experiencing server issues right now.</p>
                    <p>Please try again later!</p>
                </>
            }
            <section className='quiz-buttons'>
                {questionNum === 0 && 
                <>
                    <h2>Choose Your Poison</h2>
                    {makeButtons(spirits)}
                </>
                }
                {questionNum === 1 && 
                <>
                    <h2>Choose Your Mixer</h2>
                    {makeButtons(ingredients)}
                </>
                }
                {questionNum === 2 && 
                <>
                    <h2>Choose Your Glass</h2>
                    {/* {makeButtons(glassware)} */}
                </>
                }
                {questionNum === 3 && 
                <>
                    <button className='results-button' onClick={() => pickRandom()}>See Results</button>
                </>
                }
            </section>
            {questionNum === 4 && 
                confirmResult()
            }      
        </>
    );
}

export default Quiz;