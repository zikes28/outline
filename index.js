const { readFile, readFileSync } = require('fs');
const express = require('express');
const app = express();
const port = 3002;

app.get('/', (request, response) => {
    
    readFile('./home.html', 'utf8', (err, html) => {

        if (err) {
            response.status(500).send('sorry, out of order')
        }

        response.send(html);

    })


});
app.listen(process.env.PORT || port, () => console.log('App available on http://localhost:'+port))