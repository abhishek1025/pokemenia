import PokemonCard from "../render-cards/card.component";


const CardWrapper = ({ changeHandeler, shuffeledPokemons }) => {

    return (
        <div className='pokemon-cards-wrapper' onClick={changeHandeler}>
            <div className='pokemon-cards'>
                <PokemonCard shuffeledPokemons={shuffeledPokemons} />
            </div>
        </div>
    )
}

export default CardWrapper;