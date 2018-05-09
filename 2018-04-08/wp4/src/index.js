let modA = require('./components/a');
import modB from './components/b';
require('./assets/css/a.css');
var oDiv = document.querySelector('#app');
oDiv.innerHTML = modA + '/' + modB.aa + modB.bb
