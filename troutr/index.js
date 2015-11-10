var fs = require('fs');
var http = require('http');
var Troutr = require(__dirname + '/lib/troutr');
var troutr = new Troutr();

exports.setTrout = function(ext) {

	function grab(file) {
		var content = fs.readFileSync(__dirname + '/../' + file);
		return content;
	}	

	var specifiedFiles = [];
	var allFiles = fs.readdirSync(__dirname + '/../');
	for(var i=0; i<allFiles.length; i++) {
	 	if (allFiles[i].split('.')[1] === ext) specifiedFiles.push(allFiles[i]); 
	}///iterates over file names in the user's current directory and adds those which have the 
	// specified file extension (the ext parameter of setTrout) to the specifiedFiles array

	for (i=0; i<specifiedFiles.length; i++) {
		var fileName = specifiedFiles[i];
		console.log('Route supplied for ' + fileName);
		var path = '/' + specifiedFiles[i].split('.')[0]; //sets the path(or route) to the name of the file, without the file extension
		var content = fs.readFileSync(__dirname + '/../' + fileName);
		troutr.get(path, function(req, res) {
			if (ext !== 'html') res.writeHead(200, {'Content-Type': 'text/plain'});
			else res.writeHead(200, {'Content-Type': 'text/' + ext});
			res.write(content);
			res.end();
		});
	}
}

exports.serveTrouts = function(port) {

	var server = http.createServer(function(req, res) {
    	troutr.troute(req, res);
	});

	server.listen(port);

	console.log('Server running on port ' + port +'.')
};

