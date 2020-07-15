import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/reducers'
import './index.css';
import * as serviceWorker from './serviceWorker';

// import App from './App';
// import EncounterCreatorLayout from './components/encounter-creator/layout'
// import InitiativeTrackerLayout from'./components/initiative-tracker/layout'
// import CardGameLayout from './components/cardGame/layout';

import modules from './modules';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const routing = (
    <Provider store={store}>
        <Router>
          <Switch>
            {modules.map(module => (
                <Route {...module.routeProps} key={module.name} />
              ))}
          </Switch>
      </Router>
    </Provider>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
