import cardGameInitalState from '../cardGameInitalState'

const statusReducer = (state = cardGameInitalState.status, action) => {
    switch(action.type) {
        case 'setStatus':
            return action.status;
        default:
            return state
    }
}

export default statusReducer;