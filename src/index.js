// 1. import react and react-dom
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './App'
import reducers from '../src/Redux/Reducers';

// 2. create a react component
// Loaded from App.js



// 3. render component on root element
const myStore = createStore(reducers);
ReactDom.render(<Provider store={myStore}><App/></Provider> ,document.getElementById("root"));
