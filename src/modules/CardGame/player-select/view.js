import React from 'react';
import { Component } from "react";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import PlayerCreateLayout from '../player-create/layout';
import SelectedPlayersLayout from './selected-players/layout';
import SimpleModal from '../../../global/components/modal/modal';

import '../cardGame.css';

export default class PlayerSelectView extends Component {
    constructor(props){
        super(props);
        this.state = {uploadedImage: null, showModal: false, points: 0};
    }

    componentDidMount() {
        console.log('mounted');
        this.timer = setInterval(()=> this.getItems(), 100);
      }
      
      componentWillUnmount() {
        clearInterval(this.timer)
        this.timer = null;
      }
      
      getItems() {
        const { fetchPlayers } = this.props;
        fetchPlayers();
      }

    selectPlayerToPlay(player){
        const { selectPlayer } = this.props;
        selectPlayer(player)
    }

    createPlayer(creatingPlayer) {
        const { setStatus } = this.props;
        setStatus("creatingPlayer");
    }

    handleDeletePlayer(id) {
        const { deletePlayer } = this.props;
        deletePlayer(id)
    }

    playGame(){
        const { setStatus } = this.props;
        setStatus("playing");
    }

    renderLoadedPlayers(player, index) {
        return (
            <div key={`Player-${index}`} className="column" style={{textAlign: 'center', marginTop: '3%', marginBottom: '3%', color: 'white'}}>
                <div style={{ marginBottom: '3%'}}>
                    <img className='player-image' src={player.image} alt={player.name}/>
                </div>
                <div style={{ marginBottom: '3%'}}>
                    {player.name}
                </div>
                <Button 
                size="small"
                color="primary" 
                variant="outlined" 
                onClick={this.selectPlayerToPlay.bind(this, player)} 
                className='point-button'
                >
                    Select Player
                </Button>
                <DeleteIcon className="remove-player" onClick={this.handleDeletePlayer.bind(this, player.id)} />
            </div>
        )
    }

    render() {
        const { loadedPlayers, players } = this.props;

        return (
            <div style={{display: "flex"}}>
                <div style={{textAlign: "center", width: '80%'}}>
                    <div className="row">
                        {
                            loadedPlayers.map((player, index) => {
                                return (!players.includes(player) ?
                                    (this.renderLoadedPlayers(player, index))
                                    : null
                                )})
                        }
                    
                    </div>
                    <SimpleModal 
                        body={<PlayerCreateLayout />}
                        buttonText="Create New Player" 
                        openButtonProps={{
                            variant: 'outlined',
                            color: "secondary" 
                        }}
                    />
                    
                    <Button 
                        style={{marginTop: '1%'}}
                        size="large"
                        color="secondary" 
                        variant="outlined" 
                        onClick={this.playGame.bind(this)} 
                        className='point-button'
                        disabled={!(players.length > 0)}
                    >
                        Play Game
                    </Button>
                </div>
                <div style={{width: '20%'}}>
                    <SelectedPlayersLayout />
                </div>
            </div>
        )
    }
}