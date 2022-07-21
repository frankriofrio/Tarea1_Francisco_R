const API = 'https://rickandmortyapi.com/api';
const fetchdata = (urlApi) => {
    return fetchdata (urlApi).then(res => res.json());
}

const anotherFn =async() => {
    try {
        const data = await fetchdata(`${API/character}`);
        console.log(data.info.count);
        console.log(data.name);
        console.log(data.dimension);
    } catch (error) {
        console.log (error);
    }
}
