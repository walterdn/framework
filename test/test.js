var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
var t = require(__dirname + '/../lib/troutr.js');

describe('The troutr npm package', function(){
  it('should create a path named /troutr', function(){
    chai.request(app)
      .get('/')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
      });
  });
});
