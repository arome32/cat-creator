import React from 'react';
import { Component } from "react";
import Webcam from "react-webcam";
import SimpleModal from '../../../global/components/modal/modal'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './playerCreate.css';
import defaultImage from '../../../assets/images/family/default.png'


export default class PlayerCreateView extends Component {
    constructor(props){
        super(props);
        this.state = { image: null, name: "" };
    }

    componentDidMount() {
        this.setState({ image: defaultImage });
    }

    renderWebCam(){
        const videoConstraints = {
            width: 142,
            height: 145,
            facingMode: "user"
        };
           
        const webcamRef = React.createRef();
        const capture = () => {
            const imageSrc = webcamRef.current.getScreenshot();
            this.setState({ image: imageSrc })
        };

        return (
            <div>
                <div>
                    <Webcam
                        audio={false}
                        height={145}
                        ref={webcamRef}
                        screenshotFormat="image/png"
                        width={142}
                        videoConstraints={videoConstraints}
                    />
                </div>
                <Button 
                    variant="contained"
                    onClick={capture} 
                    style={{marginBottom: "3%", marginTop: "3%"}}
                >
                    Capture Image
                </Button>
            </div>
        )
    };

    handleUploadClick(){
        document.getElementById("image-upload").click();
    }

    handleRemoveImageClick(){
        this.setState({ image: defaultImage });
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleCreateNewPlayer(){
        const { setStatus, postNewPlayer } = this.props;
        const { image, name } = this.state;
        postNewPlayer({name, image})
        setStatus('selectingPlayers');
    }

    onUploadImage(e) { 
        const file = e.target.files[0];
        const reader = new FileReader();
        // eslint-disable-next-line no-unused-vars
        const url = reader.readAsDataURL(file);
        
        reader.onloadend = (e) => {
            this.setState({image: reader.result});
        };
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
    
    render() {
        const {image, name} = this.state;

        return (
            <div style={{textAlign: 'center', marginTop: '10%'}}>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>                
                    <div className='new-player column'>
                    {
                        image !== defaultImage ?
                        <span 
                            className="remove-image"
                            onClick={this.handleRemoveImageClick.bind(this)}
                        >
                            x
                        </span>
                        : 
                        <div style={{marginTop: '7%'}} />
                    }
                        <img 
                            className='player-image' 
                            src={image}
                            alt={"Screenshot"} 
                        /> 
                        <TextField 
                            size="small" 
                            style={{marginTop: "7%", marginBottom: "5%"}}
                            id="name-input" label="Player Name" variant="outlined"
                            value={name}    
                            onChange={this.handleNameChange.bind(this)}
                        /> 
                        <Button 
                            size="small"
                            variant="contained"
                            onClick={this.handleCreateNewPlayer.bind(this)} 
                        >
                            Create New Player
                        </Button>
                    </div>
                </div>
                <div className='upload-button-group'>
                    <SimpleModal buttonText={"Take Photo"} body={this.renderWebCam()} />
                    <div style={{color: 'white'}}>Or</div>
                    <input 
                        style={{display: 'none'}}
                        type="file"
                        id="image-upload"
                        name="image"
                        accept="image/png"
                        onChange={this.onUploadImage.bind(this)}
                    />
                    <Button 
                        variant="contained"
                        onClick={this.handleUploadClick.bind(this)} 
                    >
                        Upload File
                    </Button>
                </div>
            </div>
        )
    }
}