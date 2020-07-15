import { combineReducers } from 'redux';
import userReducer from './user-reducer'
import playersReducer from '../modules/CardGame/reducers/players-reducer';
import loadedPlayersReducer from '../modules/CardGame/reducers/loaded-players-reducer';
import statusReducer from '../modules/CardGame/reducers/status-reducer';
const rootReducer = combineReducers({
    user: userReducer,
    players: playersReducer,
    loadedPlayers: loadedPlayersReducer,
    status: statusReducer,
});

export default rootReducer;