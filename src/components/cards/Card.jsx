import './Cards.css';

const Card = (
    {
       imgUrl,
       title,
       description,
       actionLabel,
       action = ()=>{}
    }
)=>{
    // Capitalizar la primera letra del nombre del Pokémon
    const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
    
    // Generar un color de tipo aleatorio para cada Pokémon
    const typeColors = [
        'linear-gradient(45deg, #ff6b6b, #ee5a52)', // Fuego
        'linear-gradient(45deg, #74b9ff, #0984e3)', // Agua
        'linear-gradient(45deg, #a29bfe, #6c5ce7)', // Psíquico
        'linear-gradient(45deg, #fd79a8, #e84393)', // Hada
        'linear-gradient(45deg, #fdcb6e, #e17055)', // Tierra
        'linear-gradient(45deg, #00b894, #00cec9)', // Planta
        'linear-gradient(45deg, #636e72, #2d3436)', // Siniestro
        'linear-gradient(45deg, #ffeaa7, #fdcb6e)', // Eléctrico
        'linear-gradient(45deg, #d63031, #e17055)', // Lucha
        'linear-gradient(45deg, #6c5ce7, #a29bfe)', // Fantasma
    ];
    
    const randomTypeColor = typeColors[Math.floor(Math.random() * typeColors.length)];
    
    return (
        <div className="card" style={{'--type-color': randomTypeColor}}>
            <div className='card-header'>
                <img src={imgUrl} alt={capitalizedTitle} />
                <h1 className="">{capitalizedTitle}</h1>
                <div className="pokemon-number">#{imgUrl.split('/').pop().replace('.png', '')}</div>
            </div>
            <div className="card-body">
                <p>{description || `Descubre más sobre ${capitalizedTitle}, un Pokémon único con habilidades especiales.`}</p>
                <div className="pokemon-stats">
                    <div className="stat-item">
                        <span className="stat-label">HP</span>
                        <div className="stat-bar">
                            <div className="stat-fill" style={{width: `${Math.floor(Math.random() * 40) + 60}%`}}></div>
                        </div>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">ATK</span>
                        <div className="stat-bar">
                            <div className="stat-fill" style={{width: `${Math.floor(Math.random() * 40) + 60}%`}}></div>
                        </div>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">DEF</span>
                        <div className="stat-bar">
                            <div className="stat-fill" style={{width: `${Math.floor(Math.random() * 40) + 60}%`}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button onClick={()=>{action();}}>{actionLabel}</button>
            </div>
        </div>
    );
}
export default Card;
