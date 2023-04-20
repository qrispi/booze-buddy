const getCocktails = async (path) => {
    try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/' + path);
        return await response.json();
    } catch (error) {
        return error.message;
    }
}

export default getCocktails;