import cardGameInitalState from '../cardGameInitalState'

const playersReducer = (state = cardGameInitalState.players, action) => {
    let player;
    switch(action.type) {
        case 'addPoints':
            player = state[action.index];
            player.points += action.points;
            return state;
        case 'uploadImage':
            player = state[action.index];
            player.image = action.image;
            return state;
        case 'addPlayer':
            player = {
                name: action.player.name, 
                points: 0, 
                image: action.player.image
            };
            return [...state, player,];
        case 'removePlayer':
            state.splice(action.index,1);
            return [...state];
        default:
            return state
    }
}

export default playersReducer;