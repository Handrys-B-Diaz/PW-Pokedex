// Hooks : son funciones

import { useState } from "react";
import usePokemonFetch from "./usePokemonFetch";
import Card from "../cards/Card";
import { useNavigate } from "react-router-dom";
import "./Pokelist.css";

function getPokemonIdFromUrl(url) {
    const parts = url.split('/');
    return parts[parts.length - 2];
}

const PokeList = () => {
    const [offset, setOffset] = useState(0);
    const [limit] = useState(20);
    const navigateTo = useNavigate();
    
    const {
        pokemonJsonObject,
        isLoading,
        hasError
    } = usePokemonFetch(offset, limit);

    const handlePrevious = () => {
        setOffset(Math.max(0, offset - limit));
    };

    const handleNext = () => {
        setOffset(offset + limit);
    };

    const handlePokemonClick = (id) => {
        navigateTo(`/pokelist/${id}`);
    };

    return (
        <div className="poke-list">
            <h2>Pokémon List</h2>
            
            {isLoading && (
                <div className="loading">
                    <div className="loading-spinner"></div>
                    <p>Cargando Pokémon...</p>
                </div>
            )}
            
            {!isLoading && !hasError && pokemonJsonObject?.results && (
                <>
                    <section className="card-holder">
                        {pokemonJsonObject.results.map((pokemon) => {
                            const id = getPokemonIdFromUrl(pokemon.url);
                            const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                            
                            return (
                                <Card
                                    key={id}
                                    imgUrl={imgUrl}
                                    title={pokemon.name}
                                    description=""
                                    actionLabel="Ver Detalles"
                                    action={() => handlePokemonClick(id)}
                                />
                            );
                        })}
                    </section>
                    
                    <div className="navigation-buttons">
                        <button
                            onClick={handlePrevious}
                            disabled={offset === 0}
                            className="nav-button prev-button"
                        >
                            ← Anterior
                        </button>
                        
                        <span className="page-info">
                            Página {Math.floor(offset / limit) + 1}
                        </span>
                        
                        <button
                            onClick={handleNext}
                            className="nav-button next-button"
                        >
                            Siguiente →
                        </button>
                    </div>
                </>
            )}
            
            {hasError && (
                <div className="error-message">
                    <strong>¡Ups! Algo salió mal</strong>
                    <p>No pudimos cargar los Pokémon. Por favor, intenta recargar la página.</p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="retry-button"
                    >
                        Recargar
                    </button>
                </div>
            )}
        </div>
    );
};

export default PokeList;