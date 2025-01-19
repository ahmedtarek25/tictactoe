export function LandingPage(props) {
    const {handler} = props
    return (
        <div className="second-container">
            <div className="title">
                <h1>Tic-Tac-Toe <span style={{color:"#30c7b0"}}>X</span> <span style={{color:"#FF9D23"}}>O</span></h1>
            </div>
            <button className="start-butt" onClick={handler}>Start</button>
        </div>
    )
}