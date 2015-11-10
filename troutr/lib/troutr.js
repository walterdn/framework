var Troutr = module.exports = exports = function() {
	
	this.trouts = {

		'GET' : {},
		'POST' : {},
		'PUT' : {},
		'PATCH' : {},
		'DELETE' : {}

	}

};

Troutr.prototype.get = function(trout, cb) {
	this.trouts['GET'][trout] = cb;
};
	
Troutr.prototype.post = function(trout, cb) {
	this.trouts['POST'][trout] = cb;
};

Troutr.prototype.put = function(trout, cb) {
	this.trouts['PUT'][trout] = cb;
};

Troutr.prototype.patch = function(trout, cb) {
	this.trouts['PATCH'][trout] = cb;
};

Troutr.prototype.delete = function(trout, cb) {
	this.trouts['DELETE'][trout] = cb;
};

Troutr.prototype.errorOut = function(req, res) {
	res.writeHead(404, {'Content-Type': 'text/plain'});
	res.write('No trout found.');
	res.end();
};

Troutr.prototype.troute = function(req, res) {
	(this.trouts[req.method][req.url] || this.errorOut)(req, res);
};