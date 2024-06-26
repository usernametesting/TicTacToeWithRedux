// import { useDispatch, useSelector } from "react-redux";
// import { checkWinner, handlePlayerMove } from "../redux/actionCreators/gameActionCreators";

// const bootComp = () => {
//     const { playerHandles } = useSelector(state => ({
//         playerHandles: state.gameReducer.playerHandles
//     }));
//     const dispatch = useDispatch();

//     const boot = () => {

//         const callReducer = (index, player) => {
//             dispatch(handlePlayerMove(index));
//             document.getElementById(index).textContent = player;
//             dispatch(checkWinner());
//         }
//         let temp = 0;
    
//         for (let i = 0; i < playerHandles.length; i += 3) {
    
//             temp = 0;
//             let count = i + 3;
    
//             for (let k = i; k < count; k++)
//                 playerHandles[k] === "X" ? temp++ : '';
    
//             if (temp >= 2) {
//                 for (let k = i; k < count; k++)
//                     if (playerHandles[k] === null) {
    
//                         callReducer(k, 'O');
//                         return;
//                     };
//             }
//         }
    
    
//         for (let i = 0; i < 3; i++) {
//             let count = i + 7;
//             let temp = 0;
//             for (let k = i; k < count; k += 3) {
    
//                 playerHandles[k] === "X" ? temp++ : '';
//             }
    
//             if (temp >= 2) {
//                 for (let k = i; k < count; k += 3)
//                     if (playerHandles[k] === null) {
    
//                         callReducer(k, 'O');
//                         return;
//                     };
//             }
//         }
    
    
//         temp = 0
    
//         for (let k = 2; k < 8; k += 2)
//             playerHandles[k] === "X" ? temp++ : '';
    
//         if (temp >= 2) {
//             for (let k = 2; k < 8; k += 2)
//                 if (playerHandles[k] === null) {
    
//                     callReducer(k, 'O');
//                     return;
//                 };
//         }
    
//         temp = 0
    
//         for (let k = 0; k < 12; k += 4)
//             playerHandles[k] === "X" ? temp++ : '';
    
//         if (temp >= 2) {
//             for (let k = 0; k < 12; k += 4)
    
//                 if (playerHandles[k] === null) {
//                     callReducer(k, 'O');
//                     return;
//                 };
//         }
//         for (var i = 0; i < playerHandles.length; i++) {
    
//             if (playerHandles[i] === null) {
//                 callReducer(i, 'O');
//                 return;
//             }
//         }
    
    
    
//     }
    
//     return null;
// }

// export default bootComp;
