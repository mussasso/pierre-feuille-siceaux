import "./Score.css";

function Score() {
    return(
        <header>
            <div className="score-txt">
                <p>Rock</p>
                <p>Paper</p>
                <p>Scissors</p>
            </div>
            <div className="score-number">
                <p>Score</p>
                <p id="nbr">12</p>
            </div>
        </header>
    )
}

export default Score; 