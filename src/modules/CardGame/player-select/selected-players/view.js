import React from 'react';
import { Component } from "react";
import DeleteIcon from '@material-ui/icons/Delete';


export default class SelectedPlayersView extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    handleRemovePlayerClick(index) {
        const { removePlayer } = this.props;
        
        removePlayer(index);
    }
    
    render() {
        const { players } = this.props;

        return (
            <div className="selected-players-container">
                <h1 style={{color: "#f50057"}}>Selected Players</h1>
                <div>
                    {
                        players.map((player, index) => {
                            return (
                                <div key={`selected-player-${index}`} className="selected-players">
                                    <div className="selected-player-image">
                                        <img 
                                            className="player-image-sm"
                                            src={player.image}
                                            alt={player.name}
                                        />
                                    </div>
                                    <div className="selected-player-name">
                                        { player.name }
                                    </div>
                                    <div className="selected-player-delete">
                                    <DeleteIcon className="remove-selected-player" onClick={this.handleRemovePlayerClick.bind(this, index)} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}