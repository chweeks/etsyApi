var http = require('http');
var dispatcher = require("./dispatcher.js");
const PORT=8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});

function handleRequest(request, response) {
  try {
    console.log(request.url);
    dispatcher.dispatch(request, response);
  } catch(err) {
    console.log(err);
  }
};
