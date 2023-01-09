
const PokemonCard = ({ shuffeledPokemons }) => {
    return (<>
        {
            shuffeledPokemons.map((pokemon) => (
                <div key={pokemon.id} id={pokemon.id} className="pokemon-card">
                    <div>
                        <img src={pokemon.img} width="70px" height="70px" alt='img' />
                    </div>
                    <div>
                        <h2>{pokemon.name.toUpperCase()}</h2>
                    </div>
                </div>

            ))
        }
    </>)
}


export default PokemonCard;