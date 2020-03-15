import React from 'react';
import ReactDOM from 'react-dom';
import Root from './router';
// import {createStore} from 'redux';
import './style/scss.scss';

//globe css
// import './style/index.styl';
// import './style/less.less';


// const reducer = (state, action) => state;
// const store = createStore(reducer);

ReactDOM.render(<Root />, document.getElementById('app'));
