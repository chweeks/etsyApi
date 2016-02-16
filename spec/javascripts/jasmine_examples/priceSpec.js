var price = require('../../../src/price.js');
var mockData = require('./mockData.js');

describe('Price', function() {

  describe('#averagePrice', function () {
    it('returns the averagePrice of listings', function() {
      var averagePrice = '45.35';
      expect(price.averagePrice(mockData)).toEqual(averagePrice);
    });
  });

  describe('#minPriceAndListing', function () {
    it('returns the minimum price and its listing', function() {
      var minPriceAndListing = { price_USD : 10, listing : { listing_id : '11111', category_path : [ 'Art', 'Printmaking' ], price : 10, currency_code : 'USD', quantity : 87, tags : [ 'wax', 'sticks', 'sealing', 'wick', 'invitations', 'wedding', 'party', 'seals' ], materials : [ 'wool', 'cotton', 'paper', 'tin' ] } };
      expect(price.minPriceAndListing(mockData)).toEqual(minPriceAndListing);
    });
  });

  describe('#maxPriceAndListing', function () {
    it('returns the max price and its listing', function() {
      var maxPriceAndListing = { price_USD : 118.5085806920454, listing : { listing_id : '22222', category_path : [ 'Supplies', 'Commercial' ], price : 106, currency_code : 'EUR', quantity : 98, tags : [ 'lead free', 'nickel free', 'findings', 'charms', 'wholesale', 'necklace' ], materials : [ 'cotton' ] } };
      expect(price.maxPriceAndListing(mockData)).toEqual(maxPriceAndListing);
    });
  });
});
