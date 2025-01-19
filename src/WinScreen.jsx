export function WinScreen(props) {
    const {winner, restart} = props
    return (<div className="win-screen-body">
        <div className="win-screen"><div className="win-text">The winner is <span style={ winner == "X" ? {color:"#30c7b0"} : {color:"#FF9D23"}}>{winner}</span></div>
        <button className="play-again-butt" onClick={restart}>Play again!</button>
        </div>
        
    </div>)
}