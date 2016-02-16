var request = require("request");
var dispatcher = require("httpdispatcher");
var app = require("./app.js")

const URL= "https://openapi.etsy.com/v2/listings/active?api_key=j3k97n7im670ejskv8ij7nip";

dispatcher.onGet("/", function(req, res) {
  request(URL, function(error, response, body) {
    var data = JSON.parse(body).results;
    var results = app.allData(data);
    res.end(JSON.stringify(results));
  });
});

dispatcher.onGet("/price", function(req, res) {
  request(URL, function(error, response, body) {
    var data = JSON.parse(body).results;
    var results = app.priceData(data);
    res.end(JSON.stringify(results));
  });
});

dispatcher.onGet("/quantity", function(req, res) {
  request(URL, function(error, response, body) {
    var data = JSON.parse(body).results;
    var results = app.quantityData(data);
    res.end(JSON.stringify(results));
  });
});

dispatcher.onGet("/materials", function(req, res) {
  request(URL, function(error, response, body) {
    var data = JSON.parse(body).results;
    var results = app.materialsData(data);
    res.end(JSON.stringify(results));
  });
});

dispatcher.onGet("/tags", function(req, res) {
  request(URL, function(error, response, body) {
    var data = JSON.parse(body).results;
    var results = app.tagsData(data);
    res.end(JSON.stringify(results));
  });
});

dispatcher.onGet("/categories", function(req, res) {
  request(URL, function(error, response, body) {
    var data = JSON.parse(body).results;
    var results = app.categoriesData(data);
    res.end(JSON.stringify(results));
  });
});

module.exports = dispatcher;
