var request = require("request");
var dispatcher = require("httpdispatcher");
var price = require('./price.js');
var quantity = require('./quantity.js');
var materials = require('./materials.js');

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
    results['average_price_in_USD'] = price.averagePrice(data);
    results['highest_price'] = price.maxPriceAndListing(data);
    results['lowest_price'] = price.minPriceAndListing(data);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(results));
  });
});

dispatcher.onGet("/quantity", function(req, res) {
  request(URL, function(error, response, body) {
    var data = JSON.parse(body).results;
    var results = {};
    results['average_quantity'] = quantity.averageQuantity(data);
    results['highest_quantity'] = quantity.maxQuantityAndListing(data);
    results['lowest_quantity'] = quantity.minQuantityAndListing(data);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(results));
  });
});

dispatcher.onGet("/materials", function(req, res) {
  request(URL, function(error, response, body) {
    var data = JSON.parse(body).results;
    var results = {};
    results['top_five_materials'] = materials.topFiveMaterials(data);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(results));
  });
});

dispatcher.onGet("/tags", function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
});

dispatcher.onGet("/categories", function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
});

module.exports = dispatcher;
