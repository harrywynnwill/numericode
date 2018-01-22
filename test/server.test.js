let chai = require('chai');
let chaiHttp = require('chai-http');
const Server = require('../server.js');
const should = chai.should();
const expect = require('chai').expect;


chai.use(chaiHttp);
const numericode = { decode: () => "hello" };

let testServer = new Server(numericode)

testServer = testServer.start();

describe('/GET deciphered message', () => {
    it('returns deciphered code as a message in json', (done) => {
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

    describe('deserialise', () => {
        it('deserialises the response', () => {
            expect(Server.deserialise("11 222 3 4 5 6 7"))
                .to.deep.equal(['11', '222', '3', '4', '5', '6', '7']);
            expect(() => Server.deserialise("11 222 3 4 5 6 7a")).to.throw(Error);
        })
        it('only handles integers and spaces', () => {
            expect(Server.isCorrectInput("11 222 3 4 6 7  ")).to.be.true
            expect(Server.isCorrectInput("11 222 3 4 6 7  a")).to.be.false

        })

    })

});
