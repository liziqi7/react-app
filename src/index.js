import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './pages/demo/Life';
import Admin from './admin';
import Home from './pages/route_demo/route3/router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
