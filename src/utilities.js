const formatIngredients = (cocktail) => {
    const allKeys = Object.keys(cocktail);
    const ingredientKeys = allKeys.filter(key => key.includes('Ingredient'));
    const measureKeys = allKeys.filter(key => key.includes('Measure'));
    return ingredientKeys.reduce((acc, key, index) => {
        if(!/\s+$/.test(cocktail[measureKeys[index]]) && cocktail[measureKeys[index]]) {
            acc.push(cocktail[measureKeys[index]] + " " + cocktail[key]);
        } else if (cocktail[measureKeys[index]]) {
            acc.push(cocktail[measureKeys[index]] + cocktail[key]);
        } else {
            acc.push(cocktail[key]);
        }
        return acc;
    }, []);
}

const listIngredients = (cocktail) => {
    const ingredients = formatIngredients(cocktail);
    return ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>);
}

export default listIngredients;