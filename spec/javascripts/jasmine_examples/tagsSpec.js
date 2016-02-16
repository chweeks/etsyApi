var tags = require('../../../src/tags.js')
var mockData = require('./mockData.js');

describe('Tags', function() {

  describe('#topFiveTags', function () {
    it('return the top five tags', function() {
      var topFiveTags = [ 'Cord', 'wax', 'sealing', 'wick', 'invitations' ];
      expect(tags.topFiveTags(mockData)).toEqual(topFiveTags);
    });
  });

  describe('#listingsWithCommonTags', function () {
    it('return the top five tags', function() {
      var topFiveTags = [ { listing_id : '11111', category_path : [ 'Art', 'Printmaking' ], price : 10, currency_code : 'USD', quantity : 87, tags : [ 'wax', 'sticks', 'sealing', 'wick', 'invitations', 'wedding', 'party', 'seals' ], materials : [ 'wool', 'cotton', 'paper', 'tin' ] }, { listing_id : '22222', category_path : [ 'Supplies' ], price : 17, currency_code : 'GBP', quantity : 34, tags : [ 'Wax Snake', 'Necklace', 'Beading', 'Cord', 'String', 'Rope' ], materials : [ 'tin', 'vinyl', 'aluminium', 'twine' ] } ];
      expect(tags.listingsWithCommonTags(mockData)).toEqual(topFiveTags);
    });
  });

});
