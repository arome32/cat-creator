import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import SelectedPlayersView from './view';
import { removePlayer } from '../../action-creators/players-action-creators';

export const mapStateToProps = (state, props) => {
    return { 
        players: state.players,
    };
};

export const mapDispatchToProps = dispatch => bindActionCreators({ removePlayer }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectedPlayersView)