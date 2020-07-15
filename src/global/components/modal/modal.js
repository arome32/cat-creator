import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    textAlign: `center`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    color: '#000',
    backgroundColor: '#282c34',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const bodyContent = props.body;
  const openButtonVariant = props.openButtonProps ? props.openButtonProps.variant : 'contained';
  const openButtonColor = props.openButtonProps ? props.openButtonProps.color : 'default';
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div style={{position: 'relative', top: '-10px'}}>
        {bodyContent}
      </div>
      <Button variant="contained" onClick={handleClose}>Close</Button>
    </div>
  );

  return (
    <div>
      <Button 
        variant={openButtonVariant} 
        color={openButtonColor} 
        onClick={handleOpen}
      >
        {props.buttonText}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}