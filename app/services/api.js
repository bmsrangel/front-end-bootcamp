const API_URL = "http://www.omdbapi.com/?apikey=3a366c4c"

export const search = async query => {
    let result = {};
    try {
        // fazer a requisição aqui
        result = await fetch(`${API_URL}&i=${query}`);
        result = await result.json();
    } catch (e) {
        console.error(e);
    }
    return result;
};

export const getItem = async id => {
    let result = {};
    try {
        // fazer a requisição aqui
        result = await fetch(`${API_URL}&i=${id}`);
        result = await result.json();
        return result;
    } catch (e) {
        console.error(e);
    }
};

export default {
    search,
    getItem
};