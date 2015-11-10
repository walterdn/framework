var responseWriter = module.exports = function (response, responseData) {   
  response.writeHead(responseData.status || 404, {
    'Content-Type': responseData.contentType || 'text/plain'
  });
  response.write(responseData.data || 'not found');
  response.end();
}