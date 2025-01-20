import { useState } from "react"
import { WinScreen } from "./WinScreen"

let gridValues = ["","","","","","","","",""]

export function GamePage() {
    const [turn, setTurn] = useState(false)
    const [win, setWin] = useState("")
    function handleRestart() {
        setWin("")
        gridValues =["","","","","","","","",""]
        setTurn(false)
    }
    function handlePlay(e) {
        if (win == "") {
            if (!turn && gridValues[e.target.id] == "") {
            gridValues[Number(e.target.id)] = "X"
            console.log(gridValues)
            setTurn(!turn)
        }
        if (turn && gridValues[e.target.id] == "") {
            gridValues[Number(e.target.id)] = "O"
            setTurn(!turn)
        } for (let i = 0; i < 3; i++) {
            if (gridValues[(0 + (i * 3))] == gridValues[(1 + (i * 3))] && gridValues[(1 + (i * 3))] == gridValues[(2 + (i * 3))]) {
                if (gridValues[(0 + (i*3))] != "") {
                    setWin(gridValues[(0 + (i * 3))])
                    
                }
            }
            if (gridValues[(0 + (i))] == gridValues[(3 + (i))] && gridValues[(3 + (i))] == gridValues[(6 + (i))]) {
                if (gridValues[(0 + (i))] != "") {
                    setWin(gridValues[(0 + (i))])
                }
            }
            
        }
        if (gridValues[0] == gridValues[4] && gridValues[4] == gridValues[8]) {
            if (gridValues[0] != "") {
                setWin(gridValues[0])
                
            }
        }
        if (gridValues[2] == gridValues[4] && gridValues[4] == gridValues[6]) {
            if (gridValues[2] != "") {
                setWin(gridValues[2])
                
            }
        }
        if (!gridValues.includes("")) {
            gridValues = ["","","","","","","","",""]
            setTurn(false)
        }
        }
        
    }
    
    return (<div className="second-container">
        <div className="game-top-bar">
            <div className={!turn ? "turn-indicator-container-x-active" : "turn-indicator-container"}>X</div>
            <div className={turn ? "turn-indicator-container-o-active" : "turn-indicator-container"}>O</div>
        </div>
        <div className="game-grid">
            
            <div className={win != "" ? "grid-box-win" : "grid-box"} id="0" onClick={handlePlay} style={gridValues[0] == 'X' ? {color:"#30c7b0"} : {color:"#FF9D23"}}>{gridValues[0]}</div>
            <div className={win != "" ? "grid-box-win" : "grid-box"} id="1" onClick={handlePlay} style={gridValues[1] == 'X' ? {color:"#30c7b0"} : {color:"#FF9D23"}}>{gridValues[1]}</div>
            <div className={win != "" ? "grid-box-win" : "grid-box"} id="2" onClick={handlePlay} style={gridValues[2] == 'X' ? {color:"#30c7b0"} : {color:"#FF9D23"}}>{gridValues[2]}</div>
            <div className={win != "" ? "grid-box-win" : "grid-box"} id="3" onClick={handlePlay} style={gridValues[3] == 'X' ? {color:"#30c7b0"} : {color:"#FF9D23"}}>{gridValues[3]}</div>
            <div className={win != "" ? "grid-box-win" : "grid-box"} id="4" onClick={handlePlay} style={gridValues[4] == 'X' ? {color:"#30c7b0"} : {color:"#FF9D23"}}>{gridValues[4]}</div>
            <div className={win != "" ? "grid-box-win" : "grid-box"} id="5" onClick={handlePlay} style={gridValues[5] == 'X' ? {color:"#30c7b0"} : {color:"#FF9D23"}}>{gridValues[5]}</div>
            <div className={win != "" ? "grid-box-win" : "grid-box"} id="6" onClick={handlePlay} style={gridValues[6] == 'X' ? {color:"#30c7b0"} : {color:"#FF9D23"}}>{gridValues[6]}</div>
            <div className={win != "" ? "grid-box-win" : "grid-box"} id="7" onClick={handlePlay} style={gridValues[7] == 'X' ? {color:"#30c7b0"} : {color:"#FF9D23"}}>{gridValues[7]}</div>
            <div className={win != "" ? "grid-box-win" : "grid-box"} id="8" onClick={handlePlay} style={gridValues[8] == 'X' ? {color:"#30c7b0"} : {color:"#FF9D23"}}>{gridValues[8]}</div>
            {win != '' ? <WinScreen winner={win} restart={handleRestart} /> : ""}
        </div>
    </div>)
}