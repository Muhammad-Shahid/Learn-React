import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Biryani from './components/biryaniComp'
// ReactDOM.render(<App name="Faaz"/>, document.getElementById('root'));

ReactDOM.render(<Biryani />, document.getElementById('body'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
