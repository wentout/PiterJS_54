const port = 3001;
const path = '/PiterJS_54';

console.log('port', port);
console.log('path', path);

const express = require('express')
const app = express();

const static = express.static('./docs');

app.use(path, static);
app.listen(port);
