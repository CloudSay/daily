import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux'
import defaultState from './store/state';
import reducer from './store/reducer';
let store = createStore(reducer,defaultState)

ReactDOM.render(
	<Provider store={store}>
		<Container tit='asdfa'/>
	</Provider>
	, 
	document.getElementById('root'));
registerServiceWorker();
