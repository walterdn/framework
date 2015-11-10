var http = require('http');
var fs = require('fs'); 
var url = require('url'); 
var responseWriter = require(__dirname + '/writeResponse'); 

var server = http.createServer(function(request, response){
		var responseData = {};

		if(request.method === 'GET' && request.url === '/'){
			responseData.status = 200;
	  	responseData.contentType = 'text/html';
	  	responseData.data = 'hello world';

	  	console.log(responseData.status);
	  	console.log(responseData.contentType);
	  	console.log(responseData.data); 

			
		}
		console.log(response);
		responseWriter(response, responseData); 

}); 

server.listen(3000, function(){
	console.log('server running'); 
});