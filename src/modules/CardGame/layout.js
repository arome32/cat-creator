/* eslint-disable no-useless-constructor */
import React from 'react'
import CardGameContainer from './container'

export default class CardGameLayout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <CardGameContainer />
        )
    }
}