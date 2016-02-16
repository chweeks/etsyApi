var dispatcher = require("httpdispatcher");
var app = require('./priceQuantity.js');
var request = require("request");
const URL= "https://openapi.etsy.com/v2/listings/active?api_key=j3k97n7im670ejskv8ij7nip";

dispatcher.onGet("/", function(req, res) {
  request(URL, function(error, response, body) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('home page')
  });
});

dispatcher.onGet("/price", function(req, res) {
  request(URL, function(error, response, body) {
    var data = JSON.parse(body).results;
    var results = {};
    results['average_price_in_USD'] = app.averagePrice(data);
    results['highest_price'] = app.maxPriceAndListing(data);
    results['lowest_price'] = app.minPriceAndListing(data);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(results));
  });
});

dispatcher.onGet("/quantity", function(req, res) {
  request(URL, function(error, response, body) {
    var data = JSON.parse(body).results;
    var results = {};
    results['average_quantity'] = app.averageQuantity(data);
    results['highest_quantity'] = app.maxQuantityAndListing(data);
    results['lowest_quantity'] = app.minQuantityAndListing(data);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(results));
  });
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

module.exports = dispatcher;
