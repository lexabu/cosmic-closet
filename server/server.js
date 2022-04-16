const path = require('path');
const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const compression = require('compression');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(compression());
app.use(expressStaticGzip(publicPath));

// Making sure that all paths will serve up the same index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port);
