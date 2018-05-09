import React from 'react';
import ReactDOM from 'react-dom';
import obj from './App';
import ToDoList from './app2';
var App = obj.App;
var Head = obj.Head;
console.log(ToDoList)
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
	  <App />
	  <Head />
	 </div>,
	document.querySelector('#root'),
);
ReactDOM.render(
	<ToDoList />,
	document.querySelector("#app")
)
registerServiceWorker();
