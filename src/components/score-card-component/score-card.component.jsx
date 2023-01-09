const ScoreCard = ({ currentScore, bestScore }) => {

    return (
        <div className='score-card'>

            <div className='current-score'>
                Current Score: <span> {currentScore} </span>
            </div>

            <div className='best-score'>
                Best Score: <span> {bestScore} </span>
            </div>

        </div>
    )
}

export default ScoreCard;