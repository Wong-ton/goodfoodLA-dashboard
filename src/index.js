import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firebase, { FirebaseContext } from './Firebase'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Home from './Home'

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        {/* <Router basename={'/home'}> */}
        <Router>
            <App />
        </Router>
    </FirebaseContext.Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();