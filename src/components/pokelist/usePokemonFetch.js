import {useState, useEffect} from 'react';

const usePokemonFetch = (offset = 0, limit = 10) => {
    const [pokemonJsonObject, setPokemonJsonObject] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setHasError(false);
        
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                return resp.json();
            })
            .then(data => {
                setIsLoading(false);
                setPokemonJsonObject(data);
            })
            .catch(() => {
                setIsLoading(false);
                setHasError(true);
                setPokemonJsonObject({});
            });
    }, [offset, limit]);

    return {
        pokemonJsonObject,
        isLoading,
        hasError
    }
}

export default usePokemonFetch;