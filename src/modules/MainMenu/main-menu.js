/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import React from 'react'
import './main-menu.css';


class MainMenu extends React.Component {
    constructor(props){
        super(props);
    }

    onClickHandler(e) {
        console.log("Clicked")
    }

    render(){
        return (
        <div className='main-menu'>
           <div className="mm-button1">
                <a href='/init'>Initiative Trackers</a>
            </div>
            <div className="mm-button1">
                <a href='/encounter'>Encounter Creator</a>
            </div>
            <div className="mm-button1">
                <a href='/card'>Card Game</a>
            </div>
        </div>
        )
    }
}

export default MainMenu;