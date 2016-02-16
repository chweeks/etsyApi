var http = require('http');
var dispatcher = require('httpdispatcher');
const PORT=8080;

function handleRequest(request, response){
  try {
    console.log(request.url);
    dispatcher.dispatch(request, response);
  } catch(err) {
    console.log(err);
  }
}

dispatcher.onGet("/", function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Home Page');
});

dispatcher.onGet("/price", function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Price Page');
});

dispatcher.onGet("/quantity", function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Quantity Page');
});

dispatcher.onGet("/materials", function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Materials Page');
});

dispatcher.onGet("/tags", function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Tags Page');
});

dispatcher.onGet("/categories", function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Categories Page');
});

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});
