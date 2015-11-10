var fs = require('fs');
var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var troutr = require(__dirname + '/../index.js');

describe('The troutr module', function() {

	before(function() {
	    testText = fs.readFileSync(__dirname + '/../../text1.txt').toString();
	    testText2 = fs.readFileSync(__dirname + '/../../text2.txt').toString();
	    testHtml = fs.readFileSync(__dirname + '/../../webpage1.html').toString();
	    testHtml2 = fs.readFileSync(__dirname + '/../../webpage2.html').toString();
	    troutr.setTrout('txt');
	    troutr.setTrout('html');
		troutr.serveTrouts(3000);
	});

	it('should grab and host a text file', function(done) {
	    chai.request('localhost:3000')
	      .get('/text1')
	      .end(function(err, res) {
	        expect(err).to.eql(null);
	        expect(res).to.have.status(200);
	        expect(res.text).to.eql(testText);
	        done();
	      });
	});	

	it('should grab a separate .txt file and host it', function(done) {
	    chai.request('localhost:3000')
	      .get('/text2')
	      .end(function(err, res) {
	        expect(err).to.eql(null);
	        expect(res).to.have.status(200);
	        expect(res.text).to.eql(testText2);
	        done();
	      });
	});

	it('should grab an html file and host it', function(done) {
	    chai.request('localhost:3000')
	      .get('/webpage1')
	      .end(function(err, res) {
	        expect(err).to.eql(null);
	        expect(res).to.have.status(200);
	        expect(res.text).to.eql(testHtml);
	        done();
	      });
	});	

	it('should grab a second, distinct .html file and host it', function(done) {
	    chai.request('localhost:3000')
	      .get('/webpage2')
	      .end(function(err, res) {
	        expect(err).to.eql(null);
	        expect(res).to.have.status(200);
	        expect(res.text).to.eql(testHtml2);
	        done();
	      });
	});

	it('should 404 when we try to make a get request to path which we have not supplied a route for', function(done) {
	    chai.request('localhost:3000')
	      .get('/doesnotexist')
	      .end(function(err, res) {
	        expect(err).to.eql(null);
	        expect(res).to.have.status(404);
	        expect(res.text).to.eql('No trout found.');
	        done();
	      });
	});
});