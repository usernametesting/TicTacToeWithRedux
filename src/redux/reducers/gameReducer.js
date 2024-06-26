import { ACTIONS } from "../actionCreators/gameActionCreators"

const initialData = {
    sequencesOfPairs: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ],
    playerHandles: Array(9).fill(null),
    isX: 'true',
    winner: null
}


const gameReducer = (state = initialData, action) => {
    switch (action.type) {

        case ACTIONS.handlePlayerMove:
            const updatedHandles = [...state.playerHandles];
            updatedHandles[action.payload] = state.isX ? "X" : "O";
            return {
                ...state,
                playerHandles: updatedHandles,
                isX: !state.isX
            };

        case ACTIONS.checkWinner:
            const handles = [...state.playerHandles];
            for (const [a, b, c] of state.sequencesOfPairs) {
                if (handles[a] && handles[a] === handles[b] && handles[b] === handles[c]) {
                    return {
                        ...state,
                        winner: handles[a]
                    };
                }

            }
           
        default:
            return state
    }
}



export default gameReducer;