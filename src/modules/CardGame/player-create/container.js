import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import PlayerCreateView from './view';
import { setStatus } from '../action-creators/status-action-creators';
import { postNewPlayer } from '../action-creators/player-select-action-creators'

export const mapStateToProps = (state, props) => {
    return { };
};

export const mapDispatchToProps = dispatch => bindActionCreators({ setStatus, postNewPlayer }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCreateView)