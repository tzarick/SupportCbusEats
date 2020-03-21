const express = require('express');
const app = express();
const path = require('path');
const airtable = require('./airtable');
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

airtable.getData();
app.use(express.static('scripts'));
app.listen(port, () => console.log(`App listening on port ${port}!`));