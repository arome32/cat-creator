/* eslint-disable no-useless-constructor */
import React from 'react'
import PlayerSelectContainer from './container'

export default class PlayerSelectLayout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <PlayerSelectContainer player={this.props.player} index={this.props.index} />
        )
    }
}