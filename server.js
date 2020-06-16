
const express = require('express');

const app = express();

app.use(express.static('./dist/angularCrud'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angularCrud/'}),
);

app.listen(process.env.PORT || 8080);
console.log("running");
