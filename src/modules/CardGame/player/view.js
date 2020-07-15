/* eslint-disable no-useless-constructor */
import React from 'react';
import { Component } from "react";
import SimpleModal  from "../../../global/components/modal/modal";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './player.css';
import '../cardGame.css';
import defaultImage from '../../../assets/images/family/default.png'

export default class PlayerView extends Component {
    constructor(props){
        super(props);
        this.state = {uploadedImage: null, showModal: false, points: 0};
    }
    
    onSubmitPoints(e) {
        const {points} = this.state;
        const {index} = this.props;
        this.props.addPoints(Number(points), index);
    }

    onPointsChange(e) {
        this.setState({ points: e.target.value });
    }

    onUploadImage(e) {
        const {index, uploadImage} = this.props;
        
        const file = e.target.files[0];
        const reader = new FileReader();
        const url = reader.readAsDataURL(file);
        
        reader.onloadend = (e) => {
            uploadImage([reader.result], index);
        };
        console.log(url) 

        // let upload = e.target.files[0];
        // console.log(upload)
        // this.getBase64(upload, (result) => {
            // uploadImage(result, index);
        // });
    }

   getBase64(file, cb) {
       let reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onload = function () {
           cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    renderModalBody() {
        const {name} = this.props;        
        return (
            <div style={{textAlign: 'center', color: 'white'}}>
                <p id="simple-modal-description">
                    Enter the amount of points gained by {name}                    
                </p>
                <div style={{marginBottom: '2rem'}}>
                <TextField
                    id="standard-number"
                    label=""
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.onPointsChange.bind(this)}
                />
                </div>
                <div>
                <Button variant="contained" onClick={this.onSubmitPoints.bind(this)} className='point-button'>Add Points</Button>
                </div>
            </div>
        )
    }

    removePlayer() {
        const { removePlayer, index } = this.props;
        removePlayer(index);
    }

    render() {
        const {name, points, image} = this.props;        

        return (
            <div className='player column'>
                <span 
                    className="delete-player"
                    onClick={this.removePlayer.bind(this)}
                >
                    x
                </span>
                <div className="player-content">
                    <label>
                        <img
                            className='player-image' 
                            src={image ? image : defaultImage}
                            alt={`${name}`} 
                        />
                        <input 
                            type="file"
                            accept="image/*"
                            style={{display: 'none'}}
                            onChange={this.onUploadImage.bind(this)}
                        />
                    </label>
                    
                    <p>{ name }</p>
                    <p>{ 'Points: ' + points }</p>
                    <SimpleModal 
                        body={this.renderModalBody()} 
                        buttonText={"Add Points"} 
                    />
                </div>
            </div>
        )
     }
}