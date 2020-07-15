import cardGameInitalState from '../cardGameInitalState'

const loadedPlayersReducer = (state = cardGameInitalState.loadedPlayers, action) => {
    switch(action.type) {
        case 'loadPlayers':
            return action.loadedPlayers;
        default:
            return state
    }
}

export default loadedPlayersReducer;