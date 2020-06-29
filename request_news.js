async function request(apiKey, searchValue) {
    const queryParams = searchValue ? `&q=${searchValue}` : "&country=us";
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}${queryParams}`;

    return await (await fetch(url)).json()
}

export {request}