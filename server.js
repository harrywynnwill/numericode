const express = require('express')
const path = require('path');
const app = express()

module.exports = class Server {

    constructor(numericode, port = 3000) {
        this.numericode = numericode;
        this.port = port
    }

    static deserialise(codedMessage) {
        return codedMessage.split(" ");
    }

    start() {
        app.use('/', express.static(path.join(__dirname,'.', 'build')));
        app.get('/decode/:numericode', (req, res) => {
            const codedMessage = req.params.numericode;
            res.json({ decoded: this.numericode.decode(Server.deserialise(codedMessage)) })
        })
        app.listen(this.port, () => console.log(`Starting the numericode server on port ${this.port}`));
        return app;
    }

};


