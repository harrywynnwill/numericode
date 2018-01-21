let chai  = require('chai');
let chaiHttp = require('chai-http');
const Server = require('../server.js');
const should = chai.should();

chai.use(chaiHttp);
const numericode = { decode: () => "hello" };

let testServer = new Server(numericode)

testServer = testServer.start();

describe('/GET deciphered message', ()=>{
    it('returns deciphered code as a message in json', (done) =>  {
        chai.request(testServer)
        .get('/decode/8 5 12 12 15')
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('decoded');
            res.body.decoded.should.equal('hello');
          done();
        });
});

});
