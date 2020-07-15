import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import CardGameView from './view';
import { setStatus } from './action-creators/status-action-creators';

export const mapStateToProps = (state, props) => {
    return {
        players: state.players,
        status: state.status,
    };
};

export const mapDispatchToProps = dispatch => bindActionCreators({ setStatus }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardGameView)