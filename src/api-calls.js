const getCocktails = async (path) => {
    try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/' + path);
        return await response.json();
    } catch (error) {
        return error.message;
    }
}

export default getCocktails;