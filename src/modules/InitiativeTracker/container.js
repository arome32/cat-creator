import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import InitiativeTrackerView from './view';

export const mapStateToProps = (state, props) => {
    return {};
};

export const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeTrackerView)