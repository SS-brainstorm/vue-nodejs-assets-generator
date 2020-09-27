const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Import local
const config = require('./config/config');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());

app.get('/', ((req, res) => {
    res.send([
        {
            item: 1,
            title: 'test'
        }
    ])
}))

app.listen(process.env.PORT || config.port, () => {
    console.log(`Server is running on port ${config.port}`);
})
