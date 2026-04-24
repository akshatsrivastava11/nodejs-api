const express = require('express');
const app = express();
app.get('/health', (req, res) => res.json( {status:"Ok"}));
app.listen(8080);
