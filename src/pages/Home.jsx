import { Link } from "react-router-dom";
import Container from "../components/panels/Container";
import HalfPagePanel from "../components/panels/HalfPagePanel";

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">¡Bienvenido a la Pokédex!</h1>
                    <p className="hero-description">
                        Descubre el fascinante mundo de los Pokémon. Explora más de 1000 criaturas únicas, 
                        cada una con sus propias habilidades y características especiales.
                    </p>
                    <Link to="/pokelist" className="hero-button">
                        Explorar Pokémon
                    </Link>
                </div>
                <div className="hero-image">
                    <img 
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
                        alt="Pikachu"
                        className="hero-pokemon"
                    />
                </div>
            </section>

            <Container>
                <HalfPagePanel
                    leftNodes={(
                        <>
                            <div className="pokemon-feature-card">
                                <img 
                                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
                                    alt="Pikachu"
                                    className="pokemon-image"
                                />
                                <div className="pokemon-glow"></div>
                            </div>
                        </>
                    )}
                    rightNodes={(
                        <>
                        <div className="feature-content">
                            <h2 className="feature-title">¡Pikachu te da la bienvenida!</h2>
                            <p className="feature-description">
                                El Pokémon más famoso del mundo te invita a explorar esta increíble Pokédex. 
                                Con más de 1000 criaturas únicas esperando ser descubiertas, cada una con 
                                sus propias habilidades, tipos y evoluciones fascinantes.
                            </p>
                            <div className="feature-stats">
                                <div className="stat">
                                    <span className="stat-number">1000+</span>
                                    <span className="stat-label">Pokémon</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">18</span>
                                    <span className="stat-label">Tipos</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">∞</span>
                                    <span className="stat-label">Aventuras</span>
                                </div>
                            </div>
                        </div>
                        </>
                    )}
                />
                   <HalfPagePanel
                    invert={true}
                    leftNodes={(
                        <>
                            <div className="pokemon-feature-card">
                                <img 
                                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" 
                                    alt="Charizard"
                                    className="pokemon-image"
                                />
                                <div className="pokemon-glow"></div>
                            </div>
                        </>
                    )}
                    rightNodes={(
                        <>
                        <div className="feature-content">
                            <h2 className="feature-title">Descubre Legendarios</h2>
                            <p className="feature-description">
                                Desde los poderosos Pokémon legendarios hasta los más adorables comunes, 
                                cada criatura tiene una historia única que contar. Explora sus estadísticas, 
                                movimientos y evoluciones en detalle.
                            </p>
                            <div className="feature-highlights">
                                <div className="highlight">
                                    <span className="highlight-icon">⚡</span>
                                    <span className="highlight-text">Estadísticas detalladas</span>
                                </div>
                                <div className="highlight">
                                    <span className="highlight-icon">🔥</span>
                                    <span className="highlight-text">Movimientos y habilidades</span>
                                </div>
                                <div className="highlight">
                                    <span className="highlight-icon">🌟</span>
                                    <span className="highlight-text">Evoluciones completas</span>
                                </div>
                            </div>
                        </div>
                        </>
                    )}
                />
                <div className="call-to-action">
                    <h2 className="cta-title">¿Listo para la aventura?</h2>
                    <p className="cta-description">
                        Explora nuestra extensa colección de Pokémon y descubre criaturas increíbles. 
                        Desde los clásicos de la primera generación hasta los más recientes, 
                        cada Pokémon tiene algo especial que ofrecer.
                    </p>
                    <div className="cta-features">
                        <div className="cta-feature">
                            <div className="cta-icon">🎮</div>
                            <h3>Interfaz Intuitiva</h3>
                            <p>Navega fácilmente por todos los Pokémon</p>
                        </div>
                        <div className="cta-feature">
                            <div className="cta-icon">📱</div>
                            <h3>Totalmente Responsivo</h3>
                            <p>Disfruta en cualquier dispositivo</p>
                        </div>
                        <div className="cta-feature">
                            <div className="cta-icon">⚡</div>
                            <h3>Información Completa</h3>
                            <p>Todos los datos que necesitas</p>
                        </div>
                    </div>
                    <Link to="/pokelist" className="cta-button">
                        ¡Comenzar Aventura!
                    </Link>
                </div>
            </Container>
        </>
    )
}

export default Home;