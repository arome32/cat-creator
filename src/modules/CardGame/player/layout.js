/* eslint-disable no-useless-constructor */
import React from 'react'
import PlayerContainer from './container'

export default class PlayerLayout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <PlayerContainer player={this.props.player} index={this.props.index} />
        )
    }
}