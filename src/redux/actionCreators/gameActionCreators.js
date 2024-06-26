export const ACTIONS = {
    handlePlayerMove: 'handlePlayerMove',
    checkWinner: 'checkWinner'
}


export const handlePlayerMove = (payload) => {
    return {
        type: 'handlePlayerMove',
        payload
    }
}

export const checkWinner = () => {
    return {
        type: 'checkWinner',
    }
}

