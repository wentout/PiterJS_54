const port = 3001;
const path = '/PiterJS_54';

console.log('port', port);
console.log('path', path);

const express = require('express')
const app = express();

const static = express.static('./docs');

app.use(path, static);

app.get('/example/:name', (req, res) => {
	let cached = null;
	res.end();
	try {
		const {name} = req.params;
		cached = require.resolve(`./examples/${ name }`)
		require(cached);
	} catch (error) {
		debugger;
	} finally {
		if (cached) {
			delete require.cache[cached];
		}
	}
});

app.listen(port);
