const express = require('express');
const cors = require('cors')
const path = require('path');
const GoogleSpreadsheet = require('google-spreadsheet');
const creds = require('./client_secret.json')

const app = express();
app.use(cors());
app.options('*', cors());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get("/api/getData", function (req, res) {
    // Identifying which document we'll be accessing/reading from
    var doc = new GoogleSpreadsheet('1WHGBZLvwwF9Xj4H08J0fKX8Fd09k7hmID5R0Hy7D-2Y');
    // Authentication
    doc.useServiceAccountAuth(creds, function (err) {
        // Set up the sheet you'd like to get the data from. In this case 3.
        doc.getRows(1, callback)
        function callback(err, rows) {
            res.json(rows)
        }
    });
});

// // Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);




