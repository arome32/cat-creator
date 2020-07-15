import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import PlayerSelectView from './view';
import { fetchPlayers, selectPlayer, deletePlayer } from '../action-creators/player-select-action-creators';
import { setStatus } from '../action-creators/status-action-creators';

export const mapStateToProps = (state, props) => {
    return { 
        loadedPlayers: state.loadedPlayers,
        players: state.players,
    };
};

export const mapDispatchToProps = dispatch => bindActionCreators({ fetchPlayers, selectPlayer, deletePlayer, setStatus }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelectView)