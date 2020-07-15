import React from 'react';
import { Component } from "react";
import PlayerLayout from './player/layout';
import './cardGame.css';
import PlayerSelectLayout from './player-select/layout';
import PlayerCreateLayout from './player-create/layout';

export default class CardGameView extends Component {
    constructor(props){
        super(props);
        this.state = { loadPlayers: [] }
    }


    addPlayer() {
        const { setStatus } = this.props;
        setStatus('selectingPlayers');
    }

    renderGame() {
        const { players } = this.props;

        return (
            <div className='card-game'>
                <div className='row'>
                    { players.map((player, index) => { 
                        return (
                            <PlayerLayout player={player} index={index} key={`player-${index}`} />
                        )
                    }) }
                    <div
                        onClick={this.addPlayer.bind(this)}
                        className='add-player column' 
                        style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <h1>
                        Add Player To Game
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
    
    render() {
        const { status } = this.props;

        switch(status) {
            case 'creatingPlayer':
                return <PlayerCreateLayout />;
            case 'selectingPlayers':
                return <PlayerSelectLayout />;
            default:
                return this.renderGame();
        }
    }
}