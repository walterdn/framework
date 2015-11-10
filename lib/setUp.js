var Server = module.exports = exports = function(){
	this.server = {

	};
};

Server.prototype.start = function(port){
	this.listen(port); 
	console.log('The server is running on port: ' + port);
}

