let express = require('express');
let app = express();

let routerA = require('./routes/rouresA') 

app.listen(8080);
let db = {a:0,b:1}
app.use('/a',routerA(db));
app.use('/a/aa',routerA(db));

