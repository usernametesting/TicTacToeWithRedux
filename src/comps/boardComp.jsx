import { useDispatch, useSelector } from "react-redux";
import { checkWinner, handlePlayerMove } from "../redux/actionCreators/gameActionCreators";
import './boardComp.css';
const Board = ()=>{
    const dispatch = useDispatch();
    const { isX } = useSelector(state => ({
        isX: state.gameReducer.isX,
      }));
    
    const handleMove = (e) => {

        if (e.target.textContent !== '')
          return;
    
        e.target.textContent = isX ? 'X' : 'O';
    
        dispatch(handlePlayerMove(e.target.id));
        dispatch(checkWinner());
        // boot();
      }
    return (
        <div className="board">
            
        <div id="0" className="cell" onClick={handleMove}></div>
        <div id="1" className="cell" onClick={handleMove}></div>
        <div id="2" className="cell" onClick={handleMove}></div>
        <div id="3" className="cell" onClick={handleMove}></div>
        <div id="4" className="cell" onClick={handleMove}></div>
        <div id="5" className="cell" onClick={handleMove}></div>
        <div id="6" className="cell" onClick={handleMove}></div>
        <div id="7" className="cell" onClick={handleMove}></div>
        <div id="8" className="cell" onClick={handleMove}></div>
      </div>
    )
}


export default Board;