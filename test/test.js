var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
var Troutr = require(__dirname + '/../lib/troutr.js');
var troutr = new Troutr();

chai.use(chaiHttp);

describe('The troutr npm package', function(){
  it('should create a path named /troutr', function(){
    chai.request('localhost:3000')
      .get('/')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);

      });
  });
});
