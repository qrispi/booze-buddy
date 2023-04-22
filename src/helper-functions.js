const formatIngredients = (cocktail) => {
    const allKeys = Object.keys(cocktail);
    const keys = allKeys.filter(key => key.includes('Ingredient'));
    return keys.reduce((acc, key, index) => {
        if(cocktail[key]) {
            acc.push(cocktail['strMeasure' + (index + 1)] + cocktail[key]);
        }
        return acc;
    }, []);
}

const listIngredients = (cocktail) => {
    const ingredients = formatIngredients(cocktail);
    return ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>);
}

export default listIngredients;