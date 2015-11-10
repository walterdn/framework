var fs = require('fs');
var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var troutr = require(__dirname + '/../index.js');

describe('The troutr module', function() {

	before(function() {
	    testText = fs.readFileSync(__dirname + '/../../txt_test.txt').toString();
	    testHtml = fs.readFileSync(__dirname + '/../../html_test.html').toString();
	    troutr.setTrout('txt');
	    troutr.setTrout('html');
		troutr.serveTrouts(3000);
	});

	it('should grab .txt files from parent directory and write the contents to response upon request', function() {
	    chai.request('localhost:3000')
	      .get('/txt_test')
	      .end(function(err, res) {
	        expect(err).to.eql(null);
	        expect(res).to.have.status(200);
	        expect(res.text).to.eql(testText);
	      });
	});

	it('should grab .html files from parent directory and write the contents to response upon request', function() {
	    chai.request('localhost:3000')
	      .get('/html_test')
	      .end(function(err, res) {
	        expect(err).to.eql(null);
	        expect(res).to.have.status(200);
	        expect(res.text).to.eql(testHtml);
	      });
	});

	it('should 404 when we try to make a get request to path which we have not supplied a route for', function() {
	    chai.request('localhost:3000')
	      .get('/doesnotexist')
	      .end(function(err, res) {
	        expect(err).to.eql(null);
	        expect(res).to.have.status(404);
	        expect(res.text).to.eql('No trout found.');
	      });
	});
});
