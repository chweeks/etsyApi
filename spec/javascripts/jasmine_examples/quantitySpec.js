var quantity = require('../../../src/quantity.js');
var mockData = require('./mockData.js');

describe('Price', function() {

  describe('#averageQuantity', function () {
    it('returns the averagePrice of listings', function() {
      var averageQuantity = 59.2;
      expect(quantity.averageQuantity(mockData)).toEqual(averageQuantity);
    });
  });

  describe('#minQuantityAndListing', function () {
    it('returns the minimum quantity and its listing', function() {
      var minQuantityAndListing = { min_quantity : 11, listing : { listing_id : '22222', category_path : [ 'Accessories', 'Scarf' ], price : 24, currency_code : 'AUD', quantity : 11, tags : [ 'sticker', 'masking', 'masking tape', 'kawaii' ], materials : [ 'silver', 'twine', 'wood', 'cotton' ] } };
      expect(quantity.minQuantityAndListing(mockData)).toEqual(minQuantityAndListing);
    });
  });

  describe('#maxQuantityAndListing', function () {
    it('returns the max quantity and its listing', function() {
      var maxQuantityAndListing = { max_quantity : 98, listing : { listing_id : '22222', category_path : [ 'Supplies', 'Commercial' ], price : 106, currency_code : 'EUR', quantity : 98, tags : [ 'lead free', 'nickel free', 'findings', 'charms', 'wholesale', 'necklace' ], materials : [ 'cotton' ] } };
      expect(quantity.maxQuantityAndListing(mockData)).toEqual(maxQuantityAndListing);
    });
  });

});
