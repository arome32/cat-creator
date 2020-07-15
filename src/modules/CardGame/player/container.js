import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import PlayerView from './view';
import {addPoints, uploadImage, removePlayer } from '../action-creators/players-action-creators';


export const mapStateToProps = (state, props) => {
    return {
        name: props.player.name,
        points: props.player.points,
        image: props.player.image,
        index: props.index
    };
};

export const mapDispatchToProps = dispatch => bindActionCreators({addPoints, uploadImage, removePlayer}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerView)