import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux'
import defaultState from './store/state';
import reducer from './store/reducer';
let store = createStore(reducer,defaultState)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Route component={App} />
		</BrowserRouter>
	</Provider>
	,
	document.getElementById('root')
	);
	
registerServiceWorker();
